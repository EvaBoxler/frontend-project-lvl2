import { test, expect } from '@jest/globals';
import { readFile } from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedStylishOutput = readFile('stylishOutput.txt');
const expectedPlainOutput = readFile('plainOutput.txt');
const expectedJsonOutput = readFile('jsonOutput.txt');

test.each([
  { file1: 'file1.json', file2: 'file2.json', expected: expectedStylishOutput, format: 'stylish', description: 'stylish format - json files' },
  { file1: 'file1.yml', file2: 'file2.yaml', expected: expectedStylishOutput, format: 'stylish', description: 'stylish format - yaml files' },

  { file1: 'file1.json', file2: 'file2.json', expected: expectedPlainOutput, format: 'plain', description: 'plain format - json files' },
  { file1: 'file1.yml', file2: 'file2.yaml', expected: expectedPlainOutput, format: 'plain', description: 'plain format - yaml files' },

  { file1: 'file1.json', file2: 'file2.json', expected: expectedJsonOutput, format: 'json', description: 'json format - json files' },
  { file1: 'file1.yml', file2: 'file2.yaml', expected: expectedJsonOutput, format: 'json', description: 'json format - yaml files' },

])('$description', ({ file1, file2, expected, format }) => {
  expect(genDiff(file1, file2, format)).toEqual(expected);
});