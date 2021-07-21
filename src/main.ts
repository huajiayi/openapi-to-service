import request from 'umi-request';
import generateService from './serviceGenerator'

interface Option {
  data: string;
  url: string;
  outputDir: string;
}

const generate = async (option : Partial<Option>) => {
  const {data, url, outputDir} = option;
  if(!data && !url) {
    throw new Error('please input either data or url!');
  }

  if(!outputDir) {
    throw new Error('please input outputDir!');
  }
  
  let jsonData = {};
  if(url) {
    jsonData = await request.get(url);
  }
  if(data) {
    jsonData = JSON.parse(data);
  }

  generateService(jsonData, outputDir);
}

export default generate;
// # sourceMappingURL=main.js.map