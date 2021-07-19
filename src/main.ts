import request from 'umi-request';
import generatService from './serviceGenerator'

interface Option {
  data: string;
  url: string;
  output: string;
}

const generate = async (option : Partial<Option>) => {
  const {data, url, output} = option;
  if(!data && !url) {
    throw new Error('please input either data or url!');
  }

  if(!output) {
    throw new Error('please input output!');
  }
  
  let jsonData = {};
  if(url) {
    jsonData = await request.get(url);
  }
  if(data) {
    jsonData = JSON.parse(data);
  }

  generatService(jsonData, output);
}

export default generate;
// # sourceMappingURL=main.js.map