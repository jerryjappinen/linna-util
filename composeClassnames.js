"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizePrefix = prefix => {
  if (!prefix && prefix !== '') {
    return 'is';
  }

  return prefix;
};

var composeClassname = (key, value, prefix) => {
  if (value) {
    var normalizedPrefix = normalizePrefix(prefix);
    var classname = '' + key; // String/number value goes into the class name

    if ((0, _isString.default)(value) || (0, _isNumber.default)(value)) {
      classname = classname + '-' + value; // Otherwise we use boolean classnames
      // Prevent duplicating prefixes if they're passed in the keys
    } else if (classname.substr(0, normalizedPrefix.length) === normalizedPrefix) {
      classname = classname.substr(normalizedPrefix.length);
    } // Add formatted classname to result list


    return (0, _kebabCase.default)(normalizedPrefix + '-' + classname);
  }

  return null;
}; // Generate HTML/CSS class names based on a set of state, with prefixes and negatives added


var _default = (stateHash, prefix, thirdArg) => {
  // If first argument is string, assume user is just interested in one classname
  if ((0, _isString.default)(stateHash)) {
    return composeClassname(stateHash, prefix, thirdArg);
  } // Treat each class


  var classes = [];

  for (var key in stateHash) {
    var classname = composeClassname(key, stateHash[key], prefix); // We only add the classname if the value is truthy

    if (classname) {
      classes.push(classname);
    }
  }

  return classes;
};

exports.default = _default;