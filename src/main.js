const path = require('path');
const { parseFile, writeOutput } = require('./fileparser');
const { exampleFunction } = require('./helper.js');

const hashCodeAlgorithm = input => {
  // IMPLEMENT LOGIC HERE
  const someFakeOutputData = [
    { name: 'Alice', age: 20},
    { name: 'Bob', age: 30 }
  ];

  return someFakeOutputData;
}

const runFromFileName = filename => {
  console.log('\n======================\n')
  console.log(`executing dataset: ${filename}`);
  console.time('executiontime');
  const file = `../input/${filename}.in`;
  const filePath = path.resolve(__dirname, file);
  let inputData = null;
  try {
    inputData = parseFile(filePath);
  } catch (err) {
    console.log(`file not found: ${filePath}`);
    process.exit(1);
  }
  
  const result = hashCodeAlgorithm(inputData);

  writeOutput(path.resolve(__dirname, `../output/${filename}.out`), result);
  console.timeEnd('executiontime');
};

module.exports = runFromFileName;
