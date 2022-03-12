import _ from 'lodash'
const genDiff = (obj1, obj2) => {
  const obj11 = Object.entries(obj1);
  const obj22 = Object.entries(obj2);
  const arrayObj = _.union(obj11, obj22);
  console.log(arrayObj)
  const data1 = [...arrayObj].sort()
  const data = _.uniq(data1)
  console.log(data)
  const cb = (acc, [key, value]) => {
    if (obj2.hasOwnProperty(key) && obj2[key] == value && obj1.hasOwnProperty([key]) && obj1[key] == value) {
      acc = `${acc}    ${[key]}: ${value}\n`;
    }
    if (!obj2.hasOwnProperty(key) && obj2[key] !== value && obj1.hasOwnProperty([key]) && obj1[key] == value) {
      acc = `${acc}  - ${[key]}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] == value && !obj1.hasOwnProperty([key]) && obj1[key] != value) {
      acc = `${acc}  + ${[key]}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] == value && obj1[key] !== value && obj1.hasOwnProperty(key)) {
      acc = `${acc}  + ${key}: ${value}\n`;
    }
    if (obj2.hasOwnProperty(key) && obj2[key] !== value && obj1.hasOwnProperty([key]) && obj1[key] == value) {
      acc = `${acc}  - ${[key]}: ${value}\n`;
    }

    return acc;
  };
  const result = `${data.reduce(cb, '{\n')}}`;
  return console.log(result);
};

export default genDiff;
