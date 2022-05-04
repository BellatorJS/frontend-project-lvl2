import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['json', 'yml'];

const stylishResult = readFile('expected_stylish.txt');
const plainResult = readFile('expected_plain.txt');
const jsonResult = readFile('expected_json.txt');

describe('Testing gendiff with different format files', () => {
  test.each(extensions)('Compare files and output formats', (extension) => {
    const fileBefore = getFixturePath(`file1.${extension}`);
    const fileAfter = getFixturePath(`file2.${extension}`);
    expect(genDiff(fileBefore, fileAfter)).toEqual(stylishResult);
    expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(plainResult);
    expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(jsonResult);
  });
});
