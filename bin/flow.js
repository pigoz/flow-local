const debug = require('debug')('flow-local');
const resolve = require('resolve').sync;
const chalk = require('chalk');

function getLocalEslint(basedir) {
  try {
    const binPath = resolve('flow-bin/cli.js', { basedir });
    debug('FOUND', binPath);
    return binPath;
  } catch (_err) {
    debug('NOT FOUND', "'flow'");
    return null;
  }
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------
/* flow-disable no-process-exit, no-console */

const cwd = process.cwd();

debug('START', process.argv);
debug('ROOT', cwd);

const binPath = getLocalEslint(cwd);
if (binPath != null) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  require(binPath);
} else {
  // eslint-disable-next-line no-console
  console.error(chalk.red.bold(
    'Cannot find local ESLint!\n' +
    'Please install ESLint by `npm install flow --save-dev`.\n',
  ));
  process.exit(1);
}
