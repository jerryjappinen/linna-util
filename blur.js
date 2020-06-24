"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _windowExists = _interopRequireDefault(require("./windowExists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  if ((0, _windowExists.default)()) {
    window.document.activeElement.blur();
  }
};

exports.default = _default;