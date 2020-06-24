"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (email, size, fallbackImageUrl) => {
  return 'https://www.gravatar.com/avatar/' + (0, _md.default)(email) + '.jpg' + (size ? '?s=' + size : '') + (fallbackImageUrl ? '?d=' + fallbackImageUrl : '');
};

exports.default = _default;