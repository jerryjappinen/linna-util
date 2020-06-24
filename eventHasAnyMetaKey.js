"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventHasMetaKey = _interopRequireDefault(require("./eventHasMetaKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Check if keyboard event has meta key or shift
var _default = event => {
  return !!((0, _eventHasMetaKey.default)(event) || event.shiftKey);
};

exports.default = _default;