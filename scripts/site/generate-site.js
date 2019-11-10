const fs = require('fs-extra');
const path = require('path');
const Consoler = require('../tools/console-dump');

const showCasePath = path.resolve(__dirname, '../../site');

function generate(target) {
  Consoler.dump(target, 'generate');
  const isSyncSpecific = target && (target !== 'init');
  if (!target) {
    fs.removeSync(`${showCasePath}/doc`);
    Consoler.sleep(5000); // 防止出现 npm ERR! code ELIFECYCLE
    fs.copySync(path.resolve(__dirname, '_site/doc'), `${showCasePath}/doc`);
  } else if (target === 'init') {
    fs.removeSync(`${showCasePath}`);
    Consoler.sleep(15000); // 防止出现 npm ERR! code ELIFECYCLE
    fs.copySync(path.resolve(__dirname, '_site'), `${showCasePath}`);
  } else {
    fs.removeSync(`${showCasePath}/doc/app/${target}`);
  }
//   const showCaseTargetPath = `${showCasePath}/doc/app/`;
//   const iframeTargetPath = `${showCasePath}/iframe/app/`;
// // read components folder
//   const rootPath = path.resolve(__dirname, '../../components');
//   const rootDir = fs.readdirSync(rootPath);
//   const componentsDocMap = {};
//   const componentsMap = {};

//   rootDir.forEach(componentName => {
//     Tools.dump(componentName,'....');
//     if (isSyncSpecific) {
//       if (componentName !== target) {
//         return;
//       }
//     }

//   });
}

if (require.main === module) {
  generate(arg);
}

module.exports = generate;
