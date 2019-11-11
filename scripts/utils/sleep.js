const Consoler = require('./console-dump');

module.exports = function sleep(ms) {
  Consoler.dump(`延迟${ms}ms`, 'sleep');
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < ms) {
    continue;
  }
}
