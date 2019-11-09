import { dump } from '../../src/_share/utilities/tools';

import './tasks/clean';
import './tasks/client2Server_sftp';
import './tasks/client2Server_ftp';

const gulp = require('gulp');

gulp.task('test', (done: () => void) => {
  dump('gulp ok', 'test');
  done();
});
