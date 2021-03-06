import { series, task } from "gulp";
const Consoler = require('../../utils/console-dump');
const siteGenerate = require('../../site/generate-site');

/** Parse demos and docs to site directory. */
task('init:site', done => {
  Consoler.dump('init:site', 'site.ts');

  siteGenerate('init');
  done();
  // colorGenerate().then(() => {
  //   done();
  // });
});

/** Init site directory, and start watch and ng-serve */
task('s:site', series(
  'init:site',
  // parallel('watch:site', 'serve:site')
));
