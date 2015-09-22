import React from 'react';
import Day from './day';
import DateUtils from './date_utils';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "DayPicker",

  selectDay(date) {
    this.props.selectDate(date);
  },

  sizeClass() {
    return (this.weekCount() > 5 ? 'extra-week' : '');
  },

  mappedMonth() {
    var date=this.props.date,
      firstDay = DateUtils.createNewDay(1, date.getTime()),
      offset = (DateUtils.offsetDayOfWeek(firstDay.getDay()) === 0 ? 7 : firstDay.getDay()),
      daysArray = DateUtils.getArrayByBoundary(1, DateUtils.daysInMonthCount(date.getMonth(), date.getFullYear())),
      selectedDate = this.props.selectedDate,
      reactObject = this;

    return daysArray.map(function(day) {
      var thisDate = DateUtils.createNewDay(day, date.getTime()),
        weekNumber = Math.ceil((day+offset) / 7),
        selected = false;

      if (date.getMonth()==selectedDate.getMonth() && date.getFullYear()==selectedDate.getFullYear()) {
        selected = (day==selectedDate.getDate());
      }

      return <Day key={'day-mo-' + day} selected={selected} date={thisDate} week={weekNumber} changeDate={reactObject.selectDay} />
    });
  },

  weekCount() {
    return DateUtils.weeksInMonthCount(this.props.date.getMonth(), this.props.date.getFullYear());
  },

  render() {
    return (
      <div className={"date-field-react-dates " + this.sizeClass()}>
        <div>
          {this.mappedMonth()}
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});
