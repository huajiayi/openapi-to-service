import fs from "fs";
import ejs from "ejs";
import { resolve } from "path";

type In = "path" | "query" | "body" | "formdata";

interface Param {
  in: In; // 请求体类型
  name: string; // 参数名
  type: string; // 参数类型
  description: string; // 注释
  required: boolean; // 是否必须
}

interface API {
  name: string; // 函数名
  description: string; // 注释
  request: {
    url: string; // 请求地址
    method: string; // 请求方法
    params: Param[]; // 参数
    // 过滤param
    filter: {
      param: Param[]; // 请求参数
      body: Param[]; // 请求体
    };
  };
  response: {
    type: string; // 响应类型
  };
}

const getType = (type: string) => {
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

const getParams = (parameters: any, definitions: any): Param[] => {
  if (!parameters || parameters.length === 0) {
    return [];
  }

  if (parameters[0]?.in === "body") {
    const originalRef = parameters?.[0]?.schema.originalRef;
    const properties = definitions[originalRef]?.properties;
    return Object.keys(properties).map((name: string) => {
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

  return parameters.map((parameter: any) => {
    return {
      in: parameter.in,
      name: parameter.name,
      type: getType(parameter.type),
      description: parameter.description,
      required: parameter.required,
    };
  });
};

const getApis = (data: any): API[] => {
  const apis: API[] = [];
  Object.keys(data.paths).forEach((path: string) => {
    const methods = data.paths[path];
    Object.keys(methods).forEach((method: string) => {
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
            body: params.filter(
              (param) => param.in === "body" || param.in === "formdata"
            ),
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

const renderFile = (file: string, data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(file, data, {}, (err, str) => {
      if (err) {
        reject(err.message);
      }
      resolve(str);
    });
  });
};

const generatService = async (data: any, output: string) => {
  const apis = getApis(data);
  const filePath = resolve(__dirname, '../', 'src', 'template', 'umi-request.ejs'); // 这里的__dirname指向dist
  const service = await renderFile(filePath, { apis });
  fs.writeFileSync(output, service);
};

export default generatService;
