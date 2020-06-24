"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _includes = _interopRequireDefault(require("lodash/includes"));

var _map = _interopRequireDefault(require("lodash/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyCodeShortcuts = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

var getKeyCode = keyCode => {
  if (keyCodeShortcuts[keyCode]) {
    return keyCodeShortcuts[keyCode];
  }

  return keyCode;
};

var _default = function _default(event) {
  for (var _len = arguments.length, targetKeyCodes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    targetKeyCodes[_key - 1] = arguments[_key];
  }

  return (0, _includes.default)((0, _map.default)((0, _flatten.default)(targetKeyCodes), getKeyCode), event.keyCode);
};

exports.default = _default;