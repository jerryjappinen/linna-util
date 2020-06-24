"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Check if keyboard event has meta key
var _default = event => {
  return !!(event.ctrlKey || event.metaKey);
};

exports.default = _default;