"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toPlainText = _interopRequireDefault(require("./toPlainText"));

var _trimWhitespace = _interopRequireDefault(require("./trimWhitespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (string, cutoff) => {
  var formatted = (0, _toPlainText.default)(string); // FIXME: find a sentence break close by
  // FIXME: find a word break close by
  // Default to line break

  var i = formatted.indexOf('\n');

  if (i < 0 || i > cutoff) {
    i = cutoff || 200;
  }

  return (0, _trimWhitespace.default)(formatted).slice(0, i).trim();
};

exports.default = _default;