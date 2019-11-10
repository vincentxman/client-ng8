var clc = require('cli-color');

// 颜色: https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97
const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.bgBlue.white;
function Consoler() {
  Consoler.prototype.dumpErr = function (obj, title) {
    if(obj instanceof Object)
      obj = JSON.stringify(obj, null, '\t');
    if(!title)
      title='';
    console.log(notice(`${title}>...`), error(`${obj}`));
  }

  Consoler.prototype.dump = function dump(obj, title) {
    if(obj instanceof Object)
      obj = JSON.stringify(obj, null, '\t');
    if(!title)
      title='';
    console.log(notice(`${title}>...`), warn(`${obj}`));
  }

  Consoler.prototype.sleep = function (ms) {
    Consoler.prototype.dump(`延迟${ms}ms`, 'sleep');
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < ms) {
      continue;
    }
  }
}

module.exports = new Consoler();
