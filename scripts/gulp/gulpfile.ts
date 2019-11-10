
import './tasks/clean';
// import './tasks/site';
import './tasks/client2Server_sftp';
import './tasks/client2Server_ftp';
import { series } from 'gulp';
const gulp = require('gulp');
const Consoler = require('../tools/console-dump');

gulp.task('test', (done: () => void) => {
  Consoler.dump('gulp ok', 'test');
  done();
});

// gulp.task('z:dev', series(
//   'clean',
//   'z:site'
// ));
