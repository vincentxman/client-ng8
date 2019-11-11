const sleep = require('../utils/sleep');
const Consoler = require('../utils/console-dump');

//
const fs = require('fs-extra');
const path = require('path');
const parseDocMdUtil = require('./utils/parse-doc-md');
const parseDemoMdUtil = require('./utils/parse-demo-md');
const nameWithoutSuffixUtil = require('./utils/name-without-suffix');
const generateCodeBox = require('./utils/generate-code-box');
const generateDemo = require('./utils/generate-demo');
// const generateDocs = require('./utils/generate-docs');
// const generateRoutes = require('./utils/generate-routes');
// const generateIframe = require('./utils/generate-iframe');
const capitalizeFirstLetter = require('./utils/capitalize-first-letter');
const camelCase = require('./utils/camelcase');
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
    fs.removeSync(`${showCasePath}`); // TODO
    if (!fs.existsSync(`${showCasePath}`))
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
            // 读取 components\button\demo\basic.md 转换成中英文 HTML 存入 demoMap[nameKey]['enCode'] / demoMap[nameKey]['zhCode']
            const nameKey = nameWithoutSuffixUtil(demo); // basic.md
            const demoMarkDownFile = fs.readFileSync(path.join(demoDirPath, demo)); // e:\audioprint\client-ng8\components\button\demo\basic.md
            demoMap[nameKey] = parseDemoMdUtil(demoMarkDownFile);
            demoMap[nameKey]['name'] = `NzDemo${camelCase(capitalizeFirstLetter(componentName))}${camelCase(capitalizeFirstLetter(nameKey))}Component`; // "NzDemoButtonBasicComponent"
            demoMap[nameKey]['enCode'] = generateCodeBox(componentName, demoMap[nameKey]['name'], nameKey, demoMap[nameKey].meta.title['en-US'], demoMap[nameKey].en, demoMap[nameKey].meta.iframe);
            demoMap[nameKey]['zhCode'] = generateCodeBox(componentName, demoMap[nameKey]['name'], nameKey, demoMap[nameKey].meta.title['zh-CN'], demoMap[nameKey].zh, demoMap[nameKey].meta.iframe);
            if (nameKey === 'basic')
              Consoler.dump(demoMap, '5 demoMap');
          }
          if (/.ts$/.test(demo)) {
            // 复制 components\button\demo\basic.ts 到 site\doc\app\button\basic.ts
            const nameKey = nameWithoutSuffixUtil(demo); //basic.ts
            demoMap[nameKey].ts = String(fs.readFileSync(path.join(demoDirPath, demo)));   // e:\audioprint\client-ng8\components\button\demo\basic.ts
            // copy ts file to site->${component} folder
            fs.writeFileSync(path.join(showCaseComponentPath, demo), demoMap[nameKey].ts); // e:\audioprint\client-ng8\site\doc\app\button\basic.ts
            if (nameKey === 'basic')
              Consoler.dump(demoMap, '6 demoMap');
          }
          if (demo === 'module') {
            // 复制 components\button\demo\module 到 site\doc\app\button\module.ts
            const data = String(fs.readFileSync(path.join(demoDirPath, demo)));       // e:\audioprint\client-ng8\components\button\demo\module
            fs.writeFileSync(path.join(showCaseComponentPath, 'module.ts'), data);    // e:\audioprint\client-ng8\site\doc\app\button\module.ts
          }
        });
      }

      // handle components->${component}->page folder, parent component of demo page
      let pageDemo = '';
      const pageDirPath = path.join(componentDirPath, 'page'); // e:\audioprint\client-ng8\components\button\page
      if (fs.existsSync(pageDirPath)) {
        const pageDir = fs.readdirSync(pageDirPath);
        let zhLocale = '';
        let enLocale = '';
        pageDemo = {};
        pageDir.forEach(file => {
          if (/.ts$/.test(file)) {
            pageDemo.raw = String(fs.readFileSync(path.join(pageDirPath, file)));
          }
          if (/^zh-CN.txt$/.test(file)) {
            zhLocale = String(fs.readFileSync(path.join(pageDirPath, file)));
          }
          if (/^en-US.txt$/.test(file)) {
            enLocale = String(fs.readFileSync(path.join(pageDirPath, file)));
          }
        });
        pageDemo.enCode = pageDemo.raw.replace(/locale;/g, enLocale);
        pageDemo.zhCode = pageDemo.raw.replace(/locale;/g, zhLocale);
      }

      // handle components->${component}->doc folder
      // const result = {
      //   name: componentName,
      //   docZh: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.zh-CN.md')), `components/${componentName}/doc/index.zh-CN.md`),
      //   docEn: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.en-US.md')), `components/${componentName}/doc/index.en-US.md`),
      //   demoMap,
      //   pageDemo
      // };
      // componentsDocMap[componentName] = { zh: result.docZh.meta, en: result.docEn.meta };
      // componentsMap[componentName] = demoMap;
      // generateDemo(showCaseComponentPath, result);

    }
  });





}

if (require.main === module) {
  generate(arg);
}

module.exports = generate;
