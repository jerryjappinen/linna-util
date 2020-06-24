"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _replace = _interopRequireDefault(require("lodash/replace"));

var _snakeCase = _interopRequireDefault(require("lodash/snakeCase"));

var _trimWhitespace = _interopRequireDefault(require("./trimWhitespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialsFromParts = parts => {
  return (parts[0].slice(0, 1) + parts[1].slice(0, 1)).toUpperCase();
}; // Return a lowercase, short two-letter string without special characters


var _default = string => {
  if (string) {
    var normalizedString = '' + string; // Initials of multiple parts

    var whitespaceParts = (0, _trimWhitespace.default)(normalizedString).split(' ');

    if (whitespaceParts.length > 1) {
      return getInitialsFromParts(whitespaceParts);
    } // Initials of camelCasing


    var camelCaseParts = (0, _replace.default)((0, _snakeCase.default)(normalizedString), '_', ' ').split(' ');

    if (camelCaseParts.length > 1) {
      return getInitialsFromParts(camelCaseParts);
    }

    return (0, _camelCase.default)(normalizedString).slice(0, 2).toUpperCase();
  }

  return string;
};

exports.default = _default;