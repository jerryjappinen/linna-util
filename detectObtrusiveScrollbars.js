"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createStyleElement = _interopRequireDefault(require("./createStyleElement"));

var _windowExists = _interopRequireDefault(require("./windowExists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Detection test
var testClassname = 'obtrusive-scrollbar-test-123';
var detectionTestCss = ".".concat(testClassname, " {\n  overscroll-behavior: contain;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  scrollbar-width: thin;\n}\n\n.").concat(testClassname, "::-webkit-scrollbar-thumb:vertical {\n  min-height: 1rem;\n}\n\n.").concat(testClassname, "::-webkit-scrollbar-thumb:horizontal {\n  min-width: 1rem;\n}"); // Check body if scrollbars use up screen real estate
// https://www.filamentgroup.com/lab/scrollbars/
// https://codepen.io/zachleat/pen/oNvprpX

var _default = () => {
  if ((0, _windowExists.default)()) {
    // Make a test element
    var parent = window.document.createElement('div');
    parent.setAttribute('style', 'width:30px;height:30px;'); // NOTE: consumer repo must get CSS

    parent.classList.add(testClassname);
    var styleElement = (0, _createStyleElement.default)(detectionTestCss);
    var child = window.document.createElement('div');
    child.setAttribute('style', 'width:100%;height:40px');
    parent.appendChild(child);
    window.document.body.appendChild(parent); // Measure the child element, if it is not
    // 30px wide the scrollbars are obtrusive.

    var scrollbarWidth = 30 - parent.firstChild.clientWidth; // Clean up

    window.document.body.removeChild(parent);
    window.document.head.removeChild(styleElement);

    if (scrollbarWidth > 0) {
      return true;
    }
  }

  return false;
};

exports.default = _default;