"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeClassnames = exports.composeClassname = exports.normalizeBindingValue = exports.joinPrefixes = exports.getComponentNamePrefix = exports.getStaticPrefix = exports.isRoot = void 0;

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRoot = vnode => {
  return !!(vnode.parent && vnode.parent.tag && vnode.parent.tag === vnode.context.$vnode.tag);
};

exports.isRoot = isRoot;

var getStaticPrefix = vnode => {
  return vnode.context.$vnode.componentInstance.classDirectivePrefix;
};

exports.getStaticPrefix = getStaticPrefix;

var getComponentNamePrefix = vnode => {
  // In case component has a name
  var componentName = vnode.context.$vnode.tag.replace('vue-component-', '');
  var dashIndex = componentName.indexOf('-');

  if (dashIndex > 0 && componentName.length > dashIndex + 1) {
    return componentName.substr(dashIndex + 1);
  }

  return null;
};

exports.getComponentNamePrefix = getComponentNamePrefix;

var joinPrefixes = function joinPrefixes() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var prefixes = [...args];
  return (0, _kebabCase.default)(prefixes.filter(prefix => {
    return !!prefix;
  }).join('-'));
};

exports.joinPrefixes = joinPrefixes;

var normalizeBindingValue = (value, prefix) => {
  var normalizedValue = value; // Normalize strings to an array

  if ((0, _isString.default)(normalizedValue)) {
    normalizedValue = normalizedValue.split(' ');
  } // Normalize array of class names


  if ((0, _isArray.default)(normalizedValue)) {
    normalizedValue = (0, _mapValues.default)((0, _keyBy.default)(normalizedValue, value => {
      return value;
    }), () => {
      return true;
    });
  } // Normalize keys


  normalizedValue = (0, _mapKeys.default)(normalizedValue, (value, key) => {
    return (0, _kebabCase.default)((prefix ? prefix + '-' : '') + key);
  });
  return normalizedValue;
}; // Compose final classname


exports.normalizeBindingValue = normalizeBindingValue;

var composeClassname = (key, value) => {
  if (value) {
    if ((0, _isString.default)(value) || (0, _isNumber.default)(value)) {
      return (0, _kebabCase.default)(key + '-' + value);
    } else if (value) {
      return key;
    }
  }

  return null;
};

exports.composeClassname = composeClassname;

var composeClassnames = classnamesMap => {
  var classnames = []; // Go through each class name, and add it to the list if it comes out as truthy

  for (var key in classnamesMap) {
    var classname = composeClassname(key, classnamesMap[key]);

    if (classname) {
      classnames.push(classname);
    }
  }

  return classnames;
};

exports.composeClassnames = composeClassnames;