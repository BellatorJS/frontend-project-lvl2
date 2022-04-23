/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { getFilePath, parses, fileExtname } from '../parsers/readFile.js';
import getDiffTree from '../__fixtures__/ast.js'

const extension = ['.yml', '.yaml', '.json'];

const status = {
  added: '+',
  deleted: '-',
  notchanged: '*',

};

const genDiff = (object1, object2) => {
  const Data1 = getFilePath(object1);
  const Ext1 = fileExtname(Data1);
  const Data2 = getFilePath(object2);
  const Ext2 = fileExtname(Data2);
  if (!extension.includes(Ext1) || !extension.includes(Ext2)) {
    return console.log('file extension is incorrect');
  }
  const fileData1 = parses(Data1, Ext1);
  const fileData2 = parses(Data2, Ext2);

  const key1 = Object.keys(fileData1);
  const key2 = Object.keys(fileData1);
  const keys = _.union(key1, key2);
  const x = getDiffTree(fileData1, fileData2);

  console.log(x[0].children)

  
};
export default genDiff;

/* if (_.has(fileData1,key) && _.has(fileData2,key)) {}
  `!!!${currentIndent}"key:"${key}\n
  "value:"${value}\n
  "status:"${status.notchanged}\n
  "children:"  ${iter(val, depth + 1)}`
}
return (`${currentIndent}${key}: ${iter(val, depth + 1)}`);
} */
/* const strgeingify = (object, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
      if (!_.isObject(currentValue)) { // альтернативный вариант: typeof currentValue !== 'object'
        return `${currentValue}`;
      }

      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => {
          if (_.has(fileData1, key) && !_.has(fileData2, key)) {
            return `!!!${currentIndent}"key:"${key}\n
            "value:"${fileData1[key]}\n
            "status:"${status.notchanged}\n
            "children:"  ${iter(val, depth + 1)}`
          }
        });

      return [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
    };

    return iter(object, 1);
  }; */
