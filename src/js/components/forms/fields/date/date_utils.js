export default  {

  createNewDay(date, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    return newDate;
  },

  createNewDayMonth(date, month, time) {
    var newDate = new Date();
    newDate.setTime(time);
    newDate.setDate(date);
    newDate.setMonth(month);
    return newDate;
  },

  daysInMonthCount(month, year) {
    var d =new Date(year, month+1, 0);
    return d.getDate();
  },

  getArrayByBoundary(start, end) {
    var out = [];
    for(var i= start; i<=end; i++) {
      out.push(i);
    }
    return out;
  },

  weeksInMonthCount(month, year) {
    var firstOfMonth = new Date(year, month, 1);
    var lastOfMonth = new Date(year, month+1, 0);
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil(used / 7);
  }
}
