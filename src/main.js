/* eslint-disable no-param-reassign */
import _ from 'lodash';
import readFile from './readFile.js';

const genDiff = (object1, object2) => {
  const fileData1 = readFile(object1);
  const fileData2 = readFile(object2);
  const keys = Object.keys({ ...fileData1, ...fileData2 });
  const result = _.sortBy(keys, (key) => key)
    .reduce((acc, key) => {
      if (_.has(fileData1, key) && (fileData1[key] !== fileData2[key])) {
        acc = `${acc}  - ${key}: ${fileData1[key]}\n`;
      }
      if (fileData1[key] === fileData2[key]) {
        acc = `${acc}    ${key}: ${fileData1[key]}\n`;
      }
      if (_.has(fileData2, key) && (fileData1[key] !== fileData2[key])) {
        acc = `${acc}  + ${key}: ${fileData2[key]}\n`;
      }
      return acc;
    }, '{\n');

  return `${result}}`;
};

export default genDiff;
