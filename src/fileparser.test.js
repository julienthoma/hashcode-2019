const { parseFile, writeOutput } = require('./fileparser');
const path = require('path');
const fs = require('fs');

describe('fileparser', () => {
  it('parse file', () => {
    expect(true).toEqual(true);

    const result = parseFile(path.resolve(__dirname, '../input/example.in'));
    expect(result).toEqual('TODO: SHOULD RETURN DATA AS A STRUCTURED OBJECT');
  });

  it('writeOutput', () => {
    expect(true).toEqual(true);

    writeOutput(path.resolve(__dirname, '../output/testoutput.out'), ["bla"]);
    const fileContent = fs.readFileSync(path.resolve(__dirname, '../output/testoutput.out'), 'ascii');
    expect(fileContent).toEqual('TODO: NEEDS TO BE IMPLEMENTED');
  });
});
