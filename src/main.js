/* eslint-disable no-param-reassign */
import { getFilePath, parses, fileExtname } from '../parsers/readFile.js';
import stylish from './formatters/stylish.js';
import getAstTree from './getAstTree.js';

const extension = ['.yml', '.yaml', '.json'];

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

  const tree = getAstTree(fileData1, fileData2);
  const result = stylish(tree);
  return result;
};
export default genDiff;
