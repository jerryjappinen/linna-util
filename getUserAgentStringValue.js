"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Clear user's selection
var _default = (userAgentString, prefix) => {
  var normalizedPrefix = prefix.trim() + '/';
  var value; // Find match from UA string

  var prefixIndex = userAgentString.indexOf(normalizedPrefix);

  if (prefixIndex > -1) {
    value = userAgentString.substr(prefixIndex + normalizedPrefix.length); // Leave out anything after a space

    var spaceIndex = value.indexOf(' ');

    if (spaceIndex > -1) {
      value = value.substr(0, spaceIndex);
    }
  }

  return value || null;
};

exports.default = _default;