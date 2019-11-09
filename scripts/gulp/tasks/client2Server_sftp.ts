import { dump } from '../../../src/_share/utilities/tools';

const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

gulp.task('client2Server_sftp', (done: (err?: string) => void) => {
  dump('client2Server_sftp');

  gulp.src(['./dist/audioprint/**', '!./dist/audioprint/assets/**'])
    .pipe(sftp({
      host: 'ftp.o-pen.com.cn',
      user: 'audioprint',
      pass: '12@*aZs&f=-23@%^@sddAZ',
      remotePath: '/client-ng8/dist/audioprint'
    }));

  done();
});
