#!/usr/bin/env node
import { readFileSync } from 'fs';
import process from 'process';
import path from 'path';
import { Command } from 'commander';
import genDiff from '../src/main.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = readFileSync(path.resolve(process.cwd(), './__fixtures__/', filepath1), 'utf-8');
    const file2 = readFileSync(path.resolve(process.cwd(), './__fixtures__/', filepath2), 'utf-8');
    console.log(path.resolve(process.cwd(), './__fixtures__/', filepath2))
    const obj1 = JSON.parse(file1);
    const obj2 = JSON.parse(file2);
    // console.log((filepath1, filepath2, format));
    const result = genDiff(obj1, obj2);
    return result;
  });
program.parse(process.argv);
