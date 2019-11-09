import { dump } from '../../src/_share/utilities/tools';

import './tasks/clean';
import './tasks/site';
import './tasks/client2Server_sftp';
import './tasks/client2Server_ftp';
import { series } from 'gulp';

const gulp = require('gulp');

gulp.task('test', (done: () => void) => {
  dump('gulp ok', 'test');
  done();
});

gulp.task('z:dev', series(
  'clean',
  'z:site'
));
