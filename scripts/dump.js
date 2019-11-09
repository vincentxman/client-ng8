var clc = require('cli-color');

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;
function Tools() {

  Tools.prototype.dumpErr = function (obj, title) {
    console.log(notice(`${title}>...`), error(`${obj}`));
  }

  Tools.prototype.dump = function dump(obj, title) {
    console.log(notice(`${title}>...`), warn(`${obj}`));
  }
}

module.exports = new Tools();
