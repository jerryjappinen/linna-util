"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _windowExists = _interopRequireDefault(require("./windowExists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = urlOrElement => {
  if ((0, _windowExists.default)()) {
    // Check if URL or element is pointing to external domain
    var internalRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?' + window.location.hostname + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', ''); // Accept string or element

    var url = urlOrElement;

    if (url.getAttribute) {
      url = url.getAttribute('href');
    } // Modify links if they're not internal


    if (internalRegex.test(url)) {
      return true;
    }
  }

  return false;
};

exports.default = _default;