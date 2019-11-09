import * as gulp from 'gulp';
import { dump } from '../../src/_share/utilities/tools';

import './tasks/clean';
import './tasks/client2Server_sftp';


gulp.task('test', (done: () => void) => {
  dump('gulp ok', 'test');
  done();
});
