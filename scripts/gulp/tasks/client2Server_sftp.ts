const Consoler = require('../../tools/console-dump');

const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

// 复制部分 dist/audioprint 内容， 不包含 /dist/audioprint/assets/
// 复制前不删除
gulp.task('client2Server_sftp', (done: (err?: string) => void) => {
  Consoler.dump('client2Server_sftp');

  gulp.src(['./dist/audioprint/**', '!./dist/audioprint/assets/**'])
    .pipe(sftp({
      host: 'ftp.o-pen.com.cn',
      user: 'audioprint',
      pass: '12@*aZs&f=-23@%^@sddAZ',
      remotePath: '/client-ng8/dist/audioprint'
    }));

  done();
});
