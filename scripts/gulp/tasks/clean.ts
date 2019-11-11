import { task } from 'gulp';
import { buildConfig } from '../../build-config';
import { cleanTask } from '../util/task-helpers';
const Consoler = require('../../utils/console-dump');

/** Deletes the dist/ publish/ directory. */
task('clean2', cleanTask([buildConfig.outputDir, buildConfig.publishDir]));

task('clean', (done: () => void) => {
  Consoler.dump('clean',__filename);
  cleanTask([buildConfig.outputDir, buildConfig.publishDir])(done);
  done();
});
