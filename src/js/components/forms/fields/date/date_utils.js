var DateUtils = {

  daysInMonthCount: function(month, year) {
    var d =new Date(year, month+1, 0);
    return d.getDate();
  },

  getArrayByBoundary: function(start, end) {
    var out = [];
    for(var i= start; i<=end; i++) {
      out.push(i);
    }
    return out;
  },

  createNewDay:  function(date, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    return newDate;
  },

  createNewDayMonth: function(date, month, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    newDate.setMonth(month);
    return newDate;
  },

  weeksInMonthCount: function(month, year) {
    var firstOfMonth = new Date(year, month-1, 1);
    var lastOfMonth = new Date(year, month, 0);
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil(used / 7);
  }
}

module.exports = DateUtils;
