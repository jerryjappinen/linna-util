"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _lowerCase = _interopRequireDefault(require("lodash/lowerCase"));

var _map = _interopRequireDefault(require("lodash/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert event name to a conventional colon-separated string that's safe to use in HTML templates
var _default = function _default() {
  for (var _len = arguments.length, eventNameParts = new Array(_len), _key = 0; _key < _len; _key++) {
    eventNameParts[_key] = arguments[_key];
  }

  return (0, _map.default)(eventNameParts, eventNamePart => {
    return (0, _lowerCase.default)((0, _camelCase.default)(eventNamePart));
  }).join(':');
};

exports.default = _default;