"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (container, selector) => {
  var input = container.querySelector(selector || 'input, button, textarea');

  if (input) {
    return input.focus();
  }

  return null;
};

exports.default = _default;