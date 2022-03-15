import { readFileSync } from 'fs';
import process from 'process';
import path from 'path';

const readFile = (filePath) => {
  const file = readFileSync(path.resolve(process.cwd(), filePath), 'utf-8');
  const object = JSON.parse(file);
  return object;
};
export default readFile;