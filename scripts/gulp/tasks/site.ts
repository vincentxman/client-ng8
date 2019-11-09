import { task, series, parallel } from "gulp";
import { dump } from '../../../src/_share/utilities/tools';
const siteGenerate = require('../../site/generate-site');

/** Parse demos and docs to site directory. */
task('init:site', done => {
  dump('init:site');

  siteGenerate('init');
  done();
  // colorGenerate().then(() => {
  //   done();
  // });
});

/** Init site directory, and start watch and ng-serve */
task('z:site', series(
  'init:site',
  // parallel('watch:site', 'serve:site')
));
