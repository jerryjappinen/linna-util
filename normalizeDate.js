"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isValidDate = _interopRequireDefault(require("./isValidDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = dateOrValue => {
  if (dateOrValue || dateOrValue === 0) {
    if ((0, _isValidDate.default)(dateOrValue)) {
      return dateOrValue;
    }

    var newDate = new Date(dateOrValue);

    if ((0, _isValidDate.default)(newDate)) {
      return newDate;
    }
  }

  return null;
};

exports.default = _default;