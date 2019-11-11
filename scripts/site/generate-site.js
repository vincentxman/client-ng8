const sleep = require('../utils/sleep');
const Consoler = require('../utils/console-dump');

//
const fs = require('fs-extra');
const path = require('path');
// const parseDocMdUtil = require('./utils/parse-doc-md');
// const parseDemoMdUtil = require('./utils/parse-demo-md');
// const nameWithoutSuffixUtil = require('./utils/name-without-suffix');
// const generateCodeBox = require('./utils/generate-code-box');
// const generateDemo = require('./utils/generate-demo');
// const generateDocs = require('./utils/generate-docs');
// const generateRoutes = require('./utils/generate-routes');
// const generateIframe = require('./utils/generate-iframe');
// const capitalizeFirstLetter = require('./utils/capitalize-first-letter');
// const camelCase = require('./utils/camelcase');
// const getMeta = require('./utils/get-meta');
const arg = process.argv[2];
// create site folder
const showCasePath = path.resolve(__dirname, '../../site');

function generate(target) {
  Consoler.dump(target, __filename);
  const isSyncSpecific = target && (target !== 'init');
  if (!target) {
    fs.removeSync(`${showCasePath}/doc`);
    fs.copySync(path.resolve(__dirname, '_site/doc'), `${showCasePath}/doc`);
  } else if (target === 'init') {
    fs.removeSync(`${showCasePath}`);
    if(!fs.existsSync(`${showCasePath}`))
      fs.mkdirSync(`${showCasePath}`);
    fs.copySync(path.resolve(__dirname, '_site'), `${showCasePath}`);
  } else {
    fs.removeSync(`${showCasePath}/doc/app/${target}`);
  }
  const showCaseTargetPath = `${showCasePath}/doc/app/`;
  const iframeTargetPath = `${showCasePath}/iframe/app/`;
  // read components folder
  const rootPath = path.resolve(__dirname, '../../components'); // e:\audioprint\client-ng8\components
  const rootDir = fs.readdirSync(rootPath);
  const componentsDocMap = {};
  const componentsMap = {};

  rootDir.forEach(componentName => {
    Consoler.dump(componentName, '....'); // button
    if (isSyncSpecific) {
      if (componentName !== target) {
        return;
      }
    }

    const componentDirPath = path.join(rootPath, componentName);
    if (componentName === 'style' || componentName === 'core' || componentName === 'locale' || componentName === 'i18n' || componentName === 'version') {
      return;
    }
    Consoler.dump(componentDirPath, '1 componentDirPath'); // e:\audioprint\client-ng8\components\button

    if (fs.statSync(componentDirPath).isDirectory()) {
      // create site/doc/app->${component} folder
      const showCaseComponentPath = path.join(showCaseTargetPath, componentName);

      Consoler.dump(showCaseComponentPath, '2 showCaseComponentPath'); /// e:\audioprint\client-ng8\site\doc\app\button

      fs.mkdirSync(showCaseComponentPath);

      // handle components->${component}->demo folder
      const demoDirPath = path.join(componentDirPath, 'demo');
      Consoler.dump(demoDirPath, '3 demoDirPath'); // e:\audioprint\client-ng8\components\button\demo
      const demoMap = {};
      if (fs.existsSync(demoDirPath)) {
        const demoDir = fs.readdirSync(demoDirPath);
        demoDir.forEach(demo => {
          Consoler.dump(demo, '4 demo'); // basic.md

          if (/.md$/.test(demo)) {
            const nameKey = nameWithoutSuffixUtil(demo); // basic.md
            const demoMarkDownFile = fs.readFileSync(path.join(demoDirPath, demo)); // e:\audioprint\client-ng8\components\button\demo\basic.md
            demoMap[nameKey] = parseDemoMdUtil(demoMarkDownFile);
            demoMap[nameKey]['name'] = `NzDemo${camelCase(capitalizeFirstLetter(componentName))}${camelCase(capitalizeFirstLetter(nameKey))}Component`;
            demoMap[nameKey]['enCode'] = generateCodeBox(componentName, demoMap[nameKey]['name'], nameKey, demoMap[nameKey].meta.title['en-US'], demoMap[nameKey].en, demoMap[nameKey].meta.iframe);
            demoMap[nameKey]['zhCode'] = generateCodeBox(componentName, demoMap[nameKey]['name'], nameKey, demoMap[nameKey].meta.title['zh-CN'], demoMap[nameKey].zh, demoMap[nameKey].meta.iframe);
            Consoler.dump(demoMap,'5 demoMap');
          }
          // if (/.ts$/.test(demo)) {
          //   const nameKey = nameWithoutSuffixUtil(demo);
          //   demoMap[nameKey].ts = String(fs.readFileSync(path.join(demoDirPath, demo)));
          //   // copy ts file to site->${component} folder
          //   fs.writeFileSync(path.join(showCaseComponentPath, demo), demoMap[nameKey].ts);
          // }
          // if (demo === 'module') {
          //   const data = String(fs.readFileSync(path.join(demoDirPath, demo)));
          //   fs.writeFileSync(path.join(showCaseComponentPath, 'module.ts'), data);
          // }
        });
      }
    }


  });
}

if (require.main === module) {
  generate(arg);
}

module.exports = generate;
