"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = string => {
  // const regexp = new RegExp('^((?:[a-z0-9-_]+\.)*[a-z0-9-_]+\.?)(?::([0-9]+))?(.*)$', 'i')
  // const matches = regexp.exec(string)
  // return matches ? matches[0] : null
  // if (string && typeof string === 'string') {
  //   const match = string.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
  //   if (
  //     match != null &&
  //     match.length > 2 &&
  //     typeof match[2] === 'string' &&
  //     match[2].length > 0
  //   ) {
  //     return match[2]
  //   }
  // }
  if (string && typeof string === 'string') {
    var urlParts = /^(?:\w+:\/\/)?([^/]+)(.*)$/.exec(string);

    if (urlParts && urlParts[1]) {
      var sub = urlParts[1].substr(0, 4);

      if (sub === 'www.') {
        return urlParts[1].substr(4);
      }

      return urlParts[1];
    }
  }

  return string;
};

exports.default = _default;