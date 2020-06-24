"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isNaN = _interopRequireDefault(require("lodash/isNaN"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = string => {
  if (string && typeof string === 'string' && string.length) {
    var parsed = string.split('.').map(i => {
      return parseInt(i);
    });
    parsed = parsed.map(item => {
      return (0, _isNumber.default)(item) && !(0, _isNaN.default)(item) ? item : 0;
    });
    return parsed;
  }

  return null;
};

exports.default = _default;