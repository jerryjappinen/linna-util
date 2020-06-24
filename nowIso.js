"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(require("./now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return (0, _now.default)().toISOString();
};

exports.default = _default;