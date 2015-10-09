'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {

  validFormats: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'],

  createNewDay: function createNewDay(date, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    return newDate;
  },

  createNewDayMonth: function createNewDayMonth(date, month, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    newDate.setMonth(month);
    return newDate;
  },

  daysInMonthCount: function daysInMonthCount(month, year) {
    var d = new Date(year, month + 1, 0);
    return d.getDate();
  },

  getArrayByBoundary: function getArrayByBoundary(start, end) {
    var out = [];
    for (var i = start; i <= end; i++) {
      out.push(i);
    }
    return out;
  },

  weeksInMonthCount: function weeksInMonthCount(month, year) {
    var firstOfMonth = new Date(year, month, 1);
    var lastOfMonth = new Date(year, month + 1, 0);
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil(used / 7);
  }
};
module.exports = exports['default'];