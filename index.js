const execute = require('./src/main');

if (process.argv.length === 2) {
  console.error('please provide a filename');
  process.exit(1);
}

// Can be called with multiple file names node ./index.js example example2
const [nodePath, executedFile, ...rest] = process.argv;
rest.forEach(filename => execute(filename));
