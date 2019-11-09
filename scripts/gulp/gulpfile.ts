import './tasks/clean';
const gulp = require('gulp');
import { dump } from '../../src/_share/utilities/tools';

gulp.task('test', (done: () => void) => {
  dump('gulp ok', 'test');
  done();
});
