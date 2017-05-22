'use strict';

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _helper = require('./../helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  command: 'version',
  desc: '版本',
  builder: {},
  handler: function handler() {
    var version = require('../../package.json').version;
    if (_loglevel2.default.getLevel() >= _loglevel2.default.levels.INFO) {
      return _loglevel2.default.info(version);
    }
    var logo = 'CLI v' + version;
    _loglevel2.default.debug(logo);
    // helper
  }
};