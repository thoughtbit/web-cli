'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getFileData: function getFileData(path) {
    return _fs2.default.existsSync(path) ? _fs2.default.readFileSync(path).toString() : null;
  },
  getFilename: function getFilename(fullpath) {
    return _path2.default.basename(fullpath, _path2.default.extname(fullpath));
  },
  getHomeDir: function getHomeDir() {
    return process.env.HOME || process.env.USERPROFILE;
  }
};