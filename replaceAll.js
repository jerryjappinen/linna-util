"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (string, search, replacement) => {
  return string.replace(new RegExp(search, 'g'), replacement);
};

exports.default = _default;