"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _format = _interopRequireDefault(require("date-fns/format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = date => {
  return (0, _format.default)(date, 'MMMM yyyy');
};

exports.default = _default;