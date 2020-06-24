"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (arrayOrObject, asyncCallback) {
    var promises = []; // Array

    if (arrayOrObject instanceof Array) {
      arrayOrObject.forEach((item, i, array) => {
        promises.push(asyncCallback(item, i, array));
      }); // Object
    } else if (arrayOrObject instanceof Object) {
      // for (const key in arrayOrObject) {
      //   promises.push(asyncCallback(arrayOrObject[key], key))
      // }
      // Since Promise only works with arrays, we must transform keyed queries to one
      var orderedPromises = [];

      for (var key in arrayOrObject) {
        orderedPromises.push({
          key,
          query: arrayOrObject[key]
        });
      } // Run fetch callback for each query


      var results = yield Promise.all(orderedPromises.map((_ref2) => {
        var {
          query
        } = _ref2;
        return asyncCallback(query);
      })); // Place each result under the correct key

      var keyedResults = {};
      results.forEach((result, i) => {
        keyedResults[orderedPromises[i].key] = result;
      });
      return keyedResults;
    }

    return Promise.all(promises);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;