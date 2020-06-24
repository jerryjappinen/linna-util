"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = fileSizeInBytes => {
  var kb = fileSizeInBytes / 1024;
  var mb = kb / 1024;
  var gb = mb / 1024; // const tb = gb / 1024

  if (fileSizeInBytes < 1) {
    return '0 kB';
  }

  if (gb >= 1000) {
    return Math.round(gb / 1024 * 10) / 10 + ' TB';
  }

  if (mb >= 1000) {
    return Math.round(mb / 1024 * 10) / 10 + ' GB';
  }

  if (kb >= 1000) {
    return Math.round(kb / 1024 * 10) / 10 + ' MB';
  }

  if (fileSizeInBytes >= 1000) {
    return Math.round(kb * 10) / 10 + ' kB';
  }

  return Math.round(fileSizeInBytes) + ' B';
};

exports.default = _default;