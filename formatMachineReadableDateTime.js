"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isDate = _interopRequireDefault(require("date-fns/isDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = date => {
  if (!(0, _isDate.default)(date)) {
    return new Date(date).toISOString();
  }

  return date.toISOString();
};

exports.default = _default;