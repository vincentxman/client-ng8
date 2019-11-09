const fs = require('fs-extra');
const path = require('path');
const Tools = require('../dump');

const showCasePath = path.resolve(__dirname, '../../site');

function generate(target) {
  Tools.dump(target, 'generate');
  // const isSyncSpecific = target && (target !== 'init');
  // if (!target) {
  //   fs.removeSync(`${showCasePath}/doc`);
  //   fs.copySync(path.resolve(__dirname, '_site/doc'), `${showCasePath}/doc`);
  // } else if (target === 'init') {
  //   fs.removeSync(`${showCasePath}`);
  //   fs.copySync(path.resolve(__dirname, '_site'), `${showCasePath}`);
  // } else {
  //   fs.removeSync(`${showCasePath}/doc/app/${target}`);
  // }

}

if (require.main === module) {
  generate(arg);
}

module.exports = generate;
