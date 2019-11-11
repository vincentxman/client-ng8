
import './tasks/clean';
import './tasks/client2Server_sftp';
import './tasks/client2Server_ftp';
import './tasks/site';
import { buildConfig } from '../build-config';

import { series } from 'gulp';
const gulp = require('gulp');
const Consoler = require('../utils/console-dump');
const clearConsole = require('clear-any-console');

clearConsole();

Consoler.dump('loading', __filename);

gulp.task('test', (done: () => void) => {
  Consoler.dump(buildConfig, 'buildConfig');
  done();
});

gulp.task('s:dev', series( // TODO Consoler
  'clean',
  's:site'
));



