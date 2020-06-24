"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _startCase = _interopRequireDefault(require("lodash/startCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = email => {
  var replacedEmail = email.replace(/@.*$/, '');
  return (0, _startCase.default)(replacedEmail !== email ? replacedEmail : email);
};

exports.default = _default;