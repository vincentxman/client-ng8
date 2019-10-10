const { watch, lastRun, series, parallel, src, dest } = require('gulp');

var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var config = {
  user: "audioprint",
  password: "12@*aZs&f=-23@%^@sddAZ",
  host: "o-pen.com.cn",
  port: 21,
  localRoot: __dirname + "/dist/audioprint/",
  remoteRoot: "/client-ng8/dist/audioprint/",
  // include: ['*', '**/*'],      // this would upload everything except dot files
  include: ['*','**/*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['**/*.bak', "node_modules/**", "node_modules/**/.*"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

function client2Ftp() {
  return ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
}

exports.client2Ftp = client2Ftp;
