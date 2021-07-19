(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('umi-request'), require('fs'), require('ejs'), require('path')) :
  typeof define === 'function' && define.amd ? define(['umi-request', 'fs', 'ejs', 'path'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.View = factory(global.request, global.fs, global.ejs, global.path));
}(this, (function (request, fs, ejs, path) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var request__default = /*#__PURE__*/_interopDefaultLegacy(request);
  var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
  var ejs__default = /*#__PURE__*/_interopDefaultLegacy(ejs);

  const getType = (type) => {
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
                  type: getType(parameter.type),
                  description: parameter.description,
                  required: false,
              };
          });
      }
      return parameters.map((parameter) => {
          return {
              in: parameter.in,
              name: parameter.name,
              type: getType(parameter.type),
              description: parameter.description,
              required: parameter.required,
          };
      });
  };
  const getApis = (data) => {
      const apis = [];
      Object.keys(data.paths).forEach((path) => {
          const methods = data.paths[path];
          Object.keys(methods).forEach((method) => {
              const api = methods[method];
              const params = getParams(api.parameters, data.definitions);
              apis.push({
                  name: api.operationId,
                  description: api.summary,
                  request: {
                      url: path.replace('{', '${'),
                      method: method.toUpperCase(),
                      params,
                      filter: {
                          param: params.filter((param) => param.in === "query"),
                          body: params.filter((param) => param.in === "body" || param.in === "formdata"),
                      },
                  },
                  response: {
                      type: "any",
                  },
              });
          });
      });
      return apis;
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
  const generatService = async (data, output) => {
      const apis = getApis(data);
      const filePath = path.resolve(__dirname, '../', 'src', 'template', 'umi-request.ejs');
      const service = await renderFile(filePath, { apis });
      fs__default['default'].writeFileSync(output, service);
  };

  const generate = async (option) => {
      const { data, url, output } = option;
      if (!data && !url) {
          throw new Error('please input either data or url!');
      }
      if (!output) {
          throw new Error('please input output!');
      }
      let jsonData = {};
      if (url) {
          jsonData = await request__default['default'].get(url);
      }
      if (data) {
          jsonData = JSON.parse(data);
      }
      generatService(jsonData, output);
  };

  return generate;

})));
