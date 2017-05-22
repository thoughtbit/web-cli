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
  printUsageAndExit: function printUsageAndExit(script) {
    console.log('\n    ' + _chalk2.default.gray('==========================================================================\n') + '\n    Unsupported command: ' + _chalk2.default.cyan(script) + '.\n\n    Usage:\n      bees init ' + _chalk2.default.gray('<template-name> [project-name]') + '\t\u5FEB\u901F\u751F\u6210\u9879\u76EE\u6A21\u677F\n      bees server\t\u672C\u5730\u5F00\u53D1\n      bees build\t\u6253\u5305\u53D1\u5E03\n      bees build-dll\tDllPlugin\n\n    Perhaps you need to update ' + _chalk2.default.red('bees-cli') + '?\n    ' + _chalk2.default.gray('\n==========================================================================') + '\n    ');
    process.exit(0);
  }
};