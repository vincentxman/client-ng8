import * as gulp from 'gulp';

// const sftp = require('gulp-sftp-up4');

gulp.task('client2Server_sftp', (done: (err?: string) => void) => {
  console.log('.....client2Server_sftp');

  done();

  // return gulp.src(['./dist/audioprint/*', '!./dist/audioprint/assets/**'])
  //     .pipe(sftp({
  //         host: 'ftp.o-pen.com.cn',
  //         user: 'audioprint',
  //         pass: '12@*aZs&f=-23@%^@sddAZ',
  //         remotePath: '/client-ng8/dist/audioprint'
  //     }));
});
