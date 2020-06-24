"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _snakeCase = _interopRequireDefault(require("lodash/snakeCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior
var _default = (url, options) => {
  var realOptions = (0, _isPlainObject.default)(url) ? url : options || {};
  var params = [];
  var realUrl = null;

  if (url && (0, _isString.default)(url)) {
    realUrl = url;
  } else if (realOptions.url) {
    realUrl = realOptions.url;
  } else if (realOptions.image && realOptions.image.fields && realOptions.image.fields.file && realOptions.image.fields.file.url) {
    realUrl = realOptions.image.fields.file.url;
  } // Set fit & resize behavior easily


  if (realOptions.fit) {
    params.push('fit=' + (0, _snakeCase.default)(realOptions.fit));
  }

  if (realOptions.focus) {
    params.push('f=' + (0, _snakeCase.default)(realOptions.focus));
  }

  if (realOptions.format) {
    params.push('fm=' + realOptions.format.toLowerCase());
  }

  if (realOptions.width) {
    params.push('w=' + realOptions.width);
  }

  if (realOptions.height) {
    params.push('h=' + realOptions.height);
  }

  if (realUrl) {
    return realUrl + (params.length ? '?' + params.join('&') : '');
  }

  return null;
};

exports.default = _default;