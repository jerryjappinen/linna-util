"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _removeMarkdown = _interopRequireDefault(require("remove-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/stiang/remove-markdown
// Remove HTML and Markdown formatting
var _default = string => {
  return (0, _removeMarkdown.default)(string, {
    stripListLeaders: true,
    listUnicodeChar: '',
    gfm: true,
    useImgAltText: false
  }).trim();
};

exports.default = _default;