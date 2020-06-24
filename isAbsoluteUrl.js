"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
var _default = string => {
  return !!new RegExp('^(?:[a-z]+:)?//', 'i').test(string);
};

exports.default = _default;