"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _windowExists = _interopRequireDefault(require("./windowExists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = css => {
  if ((0, _windowExists.default)()) {
    var head = window.document.head || window.document.getElementsByTagName('head')[0];
    var styleElement = window.document.createElement('style');
    head.appendChild(styleElement);
    styleElement.type = 'text/css';
    styleElement.appendChild(window.document.createTextNode(css));
    return styleElement;
  }

  return null;
};

exports.default = _default;