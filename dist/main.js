(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('umi-request'), require('fs'), require('ejs'), require('path')) :
  typeof define === 'function' && define.amd ? define(['umi-request', 'fs', 'ejs', 'path'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.View = factory(global.request, global.fs, global.ejs, global.path));
}(this, (function (request, fs, ejs, path) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var request__default = /*#__PURE__*/_interopDefaultLegacy(request);
  var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
  var ejs__default = /*#__PURE__*/_interopDefaultLegacy(ejs);

  const getAllDeps = (type) => {
      return type.split('<').map(t => t.replace(/>/g, '').replace(/\[\]/g, ''));
  };
  const removeGenericsSign = (type) => {
      return type.replace(/<T>/g, '');
  };
  const removeArraySign = (type) => {
      return type.replace(/\[\]/g, '');
  };

  const getType = (param, hasGenerics) => {
      if (!param) {
          return "any";
      }
      const { type } = param;
      if (!type && param.originalRef) {
          return param.originalRef;
      }
      const numberEnum = [
          "int64",
          "integer",
          "long",
          "float",
          "double",
          "number",
          "int",
          "float",
          "double",
          "int32",
          "int64",
      ];
      const dateEnum = ["Date", "date", "dateTime", "date-time", "datetime"];
      const stringEnum = ["string", "email", "password", "url", "byte", "binary"];
      if (numberEnum.includes(type)) {
          return "number";
      }
      if (dateEnum.includes(type)) {
          return "string";
      }
      if (stringEnum.includes(type)) {
          return "string";
      }
      if (type === "boolean") {
          return "boolean";
      }
      if (type === "object") {
          return hasGenerics
              ? "T"
              : param.originalRef ?? param.additionalProperties?.type ?? "any";
      }
      if (type === "array") {
          return hasGenerics
              ? "T[]"
              : `${param.items.originalRef ?? getType(param.items)}[]`;
      }
      return "any";
  };
  const getParams = (parameters, definitions) => {
      if (!parameters || parameters.length === 0) {
          return [];
      }
      if (parameters[0]?.in === "body") {
          const originalRef = parameters?.[0]?.schema.originalRef;
          const properties = definitions[originalRef]?.properties;
          return Object.keys(properties).map((name) => {
              const parameter = properties[name];
              return {
                  in: "body",
                  name,
                  type: getType(parameter, false),
                  description: parameter.description,
                  required: false,
              };
          });
      }
      return parameters.map((parameter) => {
          return {
              in: parameter.in,
              name: parameter.name,
              type: getType(parameter, false),
              description: parameter.description,
              required: parameter.required,
          };
      });
  };
  const getUrlText = (path) => {
      if (path.includes("{")) {
          return `\`${path.replace(/{/g, "${pathVars.")}\``;
      }
      return `\'${path}\'`;
  };
  const getApis = (data, types) => {
      const getResponseType = (responses, generics) => {
          const res = responses["200"];
          if (res.schema?.type) {
              return getType(res.schema);
          }
          if (res.schema?.originalRef) {
              let type = res.schema?.originalRef?.replace(/«/g, "<").replace(/»/g, ">");
              if (getAllDeps(type).length === 1 && generics.includes(type)) {
                  type += '<any>';
              }
              return type;
          }
          return "any";
      };
      const apis = [];
      Object.keys(data.paths).forEach((path) => {
          const methods = data.paths[path];
          Object.keys(methods).forEach((method) => {
              const api = methods[method];
              const params = getParams(api.parameters, data.definitions);
              apis.push({
                  tag: api.tags?.[0],
                  name: api.operationId,
                  description: api.summary,
                  request: {
                      url: path,
                      urlText: getUrlText(path),
                      method: method.toUpperCase(),
                      params,
                      filter: {
                          path: params.filter((param) => param.in === "path"),
                          query: params.filter((param) => param.in === "query"),
                          body: params.filter((param) => param.in === "body"),
                          formdata: params.filter((param) => param.in === "formdata")
                      },
                  },
                  response: {
                      type: getResponseType(api.responses, types.filter(type => type.isGenerics).map(type => removeGenericsSign(type.name))),
                  },
              });
          });
      });
      return apis;
  };
  const getTypeParams = (properties, hasGenerics) => {
      return Object.keys(properties).map((property) => {
          const param = properties[property];
          return {
              isGenerics: hasGenerics,
              name: property,
              type: getType(param, hasGenerics),
              description: param.description,
              required: false,
          };
      });
  };
  const getTypes = (data) => {
      const generics = new Set();
      Object.keys(data.definitions).forEach((definition) => {
          const genericArr = definition.split("«");
          genericArr.pop();
          genericArr.forEach((g) => generics.add(g));
      });
      const types = [];
      Object.keys(data.definitions).forEach((definition) => {
          if (definition.split("«").length > 1) {
              return;
          }
          const def = data.definitions[definition];
          if (!def.properties) {
              return;
          }
          const isGenerics = generics.has(definition) &&
              !types.some((type) => type.name === definition);
          types.push({
              isGenerics,
              name: isGenerics ? `${definition}<T>` : definition,
              description: def.description,
              params: getTypeParams(def.properties, isGenerics),
          });
      });
      return types;
  };
  const renderFile = (file, data) => {
      return new Promise((resolve, reject) => {
          ejs__default['default'].renderFile(file, data, {}, (err, str) => {
              if (err) {
                  reject(err.message);
              }
              resolve(str);
          });
      });
  };
  const generateService = async (data, outputDir) => {
      const types = getTypes(data);
      const filePath = path.resolve(__dirname, "../", "src", "template", "type.ejs");
      const service = await renderFile(filePath, { types });
      const output = path.resolve(outputDir, "typings.ts");
      fs__default['default'].writeFileSync(output, service);
      const apis = getApis(data, types);
      const tagMap = new Map();
      data.tags.forEach((tag) => {
          tagMap.set(tag.name, []);
      });
      apis.forEach((api) => tagMap.get(api.tag)?.push(api));
      tagMap.forEach(async (apis, tag) => {
          const filePath = path.resolve(__dirname, "../", "src", "template", "umi-request.ejs");
          const deps = new Set();
          apis.forEach(api => {
              api.request.params.forEach(param => {
                  const dep = removeArraySign(param.type);
                  if (types.some(type => removeGenericsSign(type.name) === dep)) {
                      deps.add(dep);
                  }
              });
              getAllDeps(api.response.type).forEach(dep => {
                  if (types.some(type => removeGenericsSign(type.name) === dep)) {
                      deps.add(dep);
                  }
              });
          });
          const service = await renderFile(filePath, { deps, apis });
          const output = path.resolve(outputDir, `${tag}.ts`);
          fs__default['default'].writeFileSync(output, service);
      });
  };

  const generate = async (option) => {
      const { data, url, outputDir } = option;
      if (!data && !url) {
          throw new Error('please input either data or url!');
      }
      if (!outputDir) {
          throw new Error('please input outputDir!');
      }
      let jsonData = {};
      if (url) {
          jsonData = await request__default['default'].get(url);
      }
      if (data) {
          jsonData = JSON.parse(data);
      }
      generateService(jsonData, outputDir);
  };

  return generate;

})));
