"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Condence all whitespace in a string to maximum of one space
var _default = (string, preserveEnd) => {
  var trimmed = string.replace(/\s+/g, ' ');

  if (preserveEnd) {
    return trimmed.trimStart();
  }

  return trimmed.trim();
};

exports.default = _default;