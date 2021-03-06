// import * as gulp from 'gulp';
import { buildConfig } from '../../build-config';
import * as path from 'path';
const Consoler = require('../../utils/console-dump');

const gulp = require('gulp');
const FtpDeploy = require("ftp-deploy");

const ftpDeploy = new FtpDeploy();
const config = {
  user: "audioprint",
  password: "12@*aZs&f=-23@%^@sddAZ",
  host: "o-pen.com.cn",
  port: 21,
  localRoot: path.join(buildConfig.projectDir, "/dist/audioprint/"),
  remoteRoot: "/client-ng8/dist/audioprint/",
  // include: ['*', '**/*'],      // this would upload everything except dot files
  include: ['*', '!3rdpartylicenses.txt'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['**/*.bak', '**/*.map', "node_modules/**", "node_modules/**/.*"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
};

ftpDeploy.on("uploading", (data) => {
  Consoler.dump(`${data.transferredFileCount}/${data.totalFilesCount} ${data.filename}`, 'uploading'); // total file count being transferred
});

// ftpDeploy.on("uploaded", (data) => {
//   dump(data, 'uploaded'); // same data as uploading event
// });

// ftpDeploy.on("log", (data) => {
//   dump(data, 'log'); // same data as uploading event
// });

ftpDeploy.on("upload-error", (data) => {
  Consoler.dumpErr(data.err, 'upload-error'); // data will also include filename, relativePath, and other goodies
});

// 复制全部 dist/audioprint 内容
// 复制前删除全部
function client2Server_ftp(done: (err?: string) => void) {
  Consoler.dump('client2Server_ftp', __filename);
  return ftpDeploy
    .deploy(config)
    .then(_ => {
      Consoler.dump('OK', "Finished");
      done();
    })
    .catch(err => {
      Consoler.dumpErr(err, "Error")
      done(err);
    });
}

gulp.task('client2Server_ftp', client2Server_ftp);
