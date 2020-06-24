"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return a lowercase, short string without special characters
var _default = (string, length) => {
  return (0, _camelCase.default)('' + string).toLowerCase().slice(0, length || 16);
};

exports.default = _default;