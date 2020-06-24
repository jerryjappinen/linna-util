"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (value, length) => {
  if (length === 0) {
    return '' + Number.parseInt(value);
  }

  return Number.parseFloat(value).toFixed(length || 2);
};

exports.default = _default;