
import './tasks/clean';
import './tasks/client2Server_sftp';
import './tasks/client2Server_ftp';
import './tasks/site';
import { buildConfig } from '../build-config';

import { series } from 'gulp';
const gulp = require('gulp');
const Consoler = require('../tools/console-dump');

Consoler.dump('loading', 'gulpfile.ts');

gulp.task('test', (done: () => void) => {
  Consoler.dump('gulp ok', 'test');
  Consoler.dump(JSON.stringify(buildConfig, null, '\t'), 'test');
  done();
});

gulp.task('s:dev', series(
  'clean',
  's:site'
));
