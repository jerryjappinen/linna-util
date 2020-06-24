"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => {
  return !(process && process.server);
};

exports.default = _default;