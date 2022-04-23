import { readFileSync } from 'fs';
import process from 'process';
import path from 'path';
import yaml from 'js-yaml';

const getFilePath = (fileName) => {
  const filePath = path.resolve(process.cwd(), fileName);
  return filePath;
};

const fileExtname = (filePath) => {
  const fileExt = path.extname(filePath);
  return fileExt;
};

const parses = (filePath, fileExt) => {
  if (fileExt === '.yml' || fileExt === '.yaml') {
    const result = yaml.load(readFileSync(filePath, 'utf8'));
    return result;
  }
  if (fileExt === '.json') {
    const result = JSON.parse(readFileSync(filePath, 'utf8'));
    return result;
  }
  return console.log('file extension is incorrect');
};
export { getFilePath, parses, fileExtname };
