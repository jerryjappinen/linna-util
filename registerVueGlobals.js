"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register components, directives, mixins etc. on the top level
var _default = (Vue, _ref) => {
  var {
    components,
    directives,
    filters,
    mixins,
    svgs
  } = _ref;

  if (components) {
    for (var componentName in components) {
      Vue.component((0, _kebabCase.default)(componentName), components[componentName]);
    }
  }

  if (svgs) {
    for (var svg in svgs) {
      Vue.component((0, _kebabCase.default)('svg-' + svg), svgs[svg]);
    }
  }

  if (directives) {
    for (var directiveName in directives) {
      Vue.directive((0, _camelCase.default)(directiveName), directives[directiveName]);
    }
  }

  if (filters) {
    for (var filterName in filters) {
      Vue.filter((0, _camelCase.default)(filterName), filters[filterName]);
    }
  }

  if (mixins) {
    for (var mixinName in mixins) {
      Vue.mixin(mixins[mixinName]);
    }
  }
};

exports.default = _default;