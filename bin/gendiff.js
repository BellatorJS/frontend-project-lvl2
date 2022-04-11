#!/usr/bin/env node
import process from 'process';
import { Command } from 'commander';
import genDiff from '../src/main.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));
program.parse(process.argv);
