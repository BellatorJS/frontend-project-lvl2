import _ from 'lodash';
import readFile from './readFile.js';

const genDiff = (object1, object2) => {
  const obj1 = readFile(object1);
  const obj2 = readFile(object2);
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);
  const array = _.union(arr1, arr2);
  const arraySorted = [...array].sort();
  const data = _.uniqWith(arraySorted, _.isEqual);
  const cb = (acc, [key, value]) => {
    if (obj2.hasOwnProperty(key) && obj2[key] === value && obj1.hasOwnProperty([key]) && obj1[key] === value) {
      acc = `${acc}    ${[key]}: ${value}\n`;
    }
    if (!obj2.hasOwnProperty(key) && obj2[key] !== value && obj1.hasOwnProperty([key]) && obj1[key] === value) {
      acc = `${acc}  - ${[key]}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] === value && !obj1.hasOwnProperty([key]) && obj1[key] !== value) {
      acc = `${acc}  + ${[key]}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] === value && obj1[key] !== value && obj1.hasOwnProperty(key)) {
      acc = `${acc}  + ${key}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] !== value && obj1.hasOwnProperty([key]) && obj1[key] === value) {
      acc = `${acc}  - ${[key]}: ${value}\n`;
    }
    return acc;
  };
  const result = `${data.reduce(cb, '{\n')}}`;
  return console.log(result);
};

export default genDiff;
