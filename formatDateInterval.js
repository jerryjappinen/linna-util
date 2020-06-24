"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _format = _interopRequireDefault(require("date-fns/format"));

var _getDay = _interopRequireDefault(require("date-fns/getDay"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

var _formatDate = _interopRequireDefault(require("./formatDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (date1, date2) => {
  var year1 = (0, _getYear.default)(date1);
  var year2 = (0, _getYear.default)(date2); // Different years

  if (year1 !== year2) {
    return (0, _formatDate.default)(date1) + ' – ' + (0, _formatDate.default)(date2);
  }

  var month1 = (0, _getMonth.default)(date1);
  var month2 = (0, _getMonth.default)(date2); // Different month of same year

  if (month1 !== month2) {
    return (0, _format.default)(date1, 'd MMMM') + ' – ' + (0, _format.default)(date2, 'd MMMM') + ' ' + (0, _format.default)(date1, 'yyyy');
  }

  var day1 = (0, _getDay.default)(date1);
  var day2 = (0, _getDay.default)(date2); // Different day

  if (day1 !== day2) {
    return (0, _format.default)(date1, 'd') + ' – ' + (0, _format.default)(date2, 'd') + ' ' + (0, _format.default)(date1, 'MMMM yyyy');
  } // Same day


  return (0, _formatDate.default)(date1);
};

exports.default = _default;