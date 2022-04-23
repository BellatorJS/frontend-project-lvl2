import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two jsons files', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const aimPath = getFixturePath('aim.txt');
  const goal = genDiff(file1Path, file2Path);
  const aim = fs.readFileSync(aimPath, 'utf-8');
  expect(goal).toEqual(aim);
});

test('compare two yaml files', () => {
  const file1Path = getFixturePath('filepath1.yml');
  const file2Path = getFixturePath('filepath2.yml');
  const aimPath = getFixturePath('aim.txt');
  const goal = genDiff(file1Path, file2Path);
  const aim = fs.readFileSync(aimPath, 'utf-8');
  expect(goal).toEqual(aim);
});

test('compare yaml and json files', () => {
  const file1Path = getFixturePath('filepath1.yml');
  const file2Path = getFixturePath('file2.json');
  const aimPath = getFixturePath('aim.txt');
  const goal = genDiff(file1Path, file2Path);
  const aim = fs.readFileSync(aimPath, 'utf-8');
  expect(goal).toEqual(aim);
});

test('compare two incorrect files', () => {
  const file1Path = getFixturePath('filedoc1.doc');
  const file2Path = getFixturePath('filedoc2.doc');
  const goal = genDiff(file1Path, file2Path);
  const aim = console.log('file extension is incorrect');
  expect(goal).toBe(aim);
});
