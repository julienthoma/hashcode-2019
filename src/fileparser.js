const fs = require('fs');

const stringifyLine = line => "TODO: NEEDS TO BE IMPLEMENTED";

exports.writeOutput = (filename, dataSet) => {
  let outputString = dataSet.map(line => stringifyLine(line)).join('\n');

  fs.writeFileSync(filename, outputString);
};

exports.parseFile = file => {
  const content = fs.readFileSync(file, 'ascii');
  const fileRows = content.split('\n');

  return 'TODO: SHOULD RETURN DATA AS A STRUCTURED OBJECT';
}
