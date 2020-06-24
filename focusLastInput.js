"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (container, selector) => {
  var inputs = container.querySelectorAll(selector || 'input, button, textarea');

  if (inputs && inputs.length) {
    return inputs[inputs.length - 1].focus();
  }

  return null;
};

exports.default = _default;