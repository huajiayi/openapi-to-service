const generate = require('../dist/main')
const {resolve} = require('path')

const url = 'http://192.168.11.40:7300/mock/6093b81a9055d00017a6a31b/swagger';
const output = resolve(__dirname, 'service', 'umi-request.ts');
generate({url, output})