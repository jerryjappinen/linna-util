"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Don't throw errors, return failing promises with `undefined` as return value
var _default = /*#__PURE__*/_asyncToGenerator(function* () {
  for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
    promises[_key] = arguments[_key];
  }

  if (promises instanceof Array) {
    // Handle multiple promises with Promise.all
    return Promise.all(promises.map( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (promise) {
        // Try promise
        try {
          return yield promise; // Don't throw errors, return `undefined` instead
        } catch (error) {
          return undefined;
        }
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()));
  }

  return promises;
});

exports.default = _default;