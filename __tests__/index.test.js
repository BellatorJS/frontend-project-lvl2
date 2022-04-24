import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);


test('stylish', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const aimPath = getFixturePath('text1.txt');
  const goal = genDiff(file1Path, file2Path);
  console.log(goal);
  const aim = fs.readFileSync(aimPath, 'utf-8');
  expect(goal).toEqual(aim);
});
