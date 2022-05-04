import { readFileSync } from 'fs';
import path from 'path';
import parse from './parse.js';
import format from './formatters/index.js';
import getAstTree from './getAstTree.js';

const readFile = (filename) => readFileSync(path.resolve(process.cwd(), filename), 'utf-8');
const fileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = fileFormat(filepath1);
  const file2format = fileFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = parse(file1format, fileContent1);
  const data2 = parse(file2format, fileContent2);
  const astTree = getAstTree(data1, data2);
  return format(astTree, formatName);
};
export default genDiff;
