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

  offsetDayOfWeek(dayOfWeek) {
    return dayOfWeek == 6 ? '0' : (dayOfWeek+1).toString();
  },

  weeksInMonthCount(month, year) {
    var firstOfMonth = new Date(year, month, 1);
    var lastOfMonth = new Date(year, month+1, 0);
    var used = this.offsetDayOfWeek(firstOfMonth.getDay()) - 1 + lastOfMonth.getDate();
    console.log("-------");
    console.log('firstOfMonth: ' + firstOfMonth.getDay());
    console.log('offsetDayOfWeek: ' + this.offsetDayOfWeek(firstOfMonth.getDay()));
    console.log('lastOfMonth: ' + lastOfMonth.getDate());
    console.log('used: ' + used.toString());
    console.log(Math.ceil(used / 7));
    return Math.ceil(used / 7);
  }
}
