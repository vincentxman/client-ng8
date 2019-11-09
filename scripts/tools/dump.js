var clc = require('cli-color');

// 颜色: https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97
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

  Tools.prototype.sleep = function (ms) {
    Tools.prototype.dump(`延迟${ms}ms`, 'sleep');
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < ms) {
      continue;
    }
  }
}

module.exports = new Tools();
