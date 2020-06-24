"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _windowExists = _interopRequireDefault(require("./windowExists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Clear user's selection
var _default = () => {
  if ((0, _windowExists.default)()) {
    if (window.document && window.document.selection && window.document.selection.empty) {
      window.document.selection.empty();
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
  }
};

exports.default = _default;