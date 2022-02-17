#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
const program = new Command();
.option('-f, --format [type]', 'output format',)
.arguments('<filepath1> <filepath2>')
.action((filepath1, filepath2, { format }) => {
    console.log((filepath1, filepath2, format));
});
program.parse();

//Declaration or statement expected. 4 строка