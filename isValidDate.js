"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isDate = _interopRequireDefault(require("lodash/isDate"));

var _isNaN = _interopRequireDefault(require("lodash/isNaN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = value => {
  if ((0, _isDate.default)(value) && value.getTime && !(0, _isNaN.default)(value.getTime())) {
    return true;
  }

  return false;
};

exports.default = _default;