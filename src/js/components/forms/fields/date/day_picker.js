import React from 'react';
import Day from './day';
import DateUtils from './date_utils';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "DayPicker",

  propTypes: {
    date: Type.string,
    maxDate: Type.object,
    minDate: Type.object,
    selectDate: Type.func
  },

  classes() {
    var classes = ['react-datepicker-daypicker', 'relative'];
    if (this.weekCount() > 5) classes.push('extra-week');
    return classes.join(' ');
  },

  mappedMonth() {
    var date = this.props.date,
        daysArray = DateUtils.getArrayByBoundary(1,
                                                 DateUtils.daysInMonthCount(date.getMonth(),
                                                 date.getFullYear())),
        firstDay = DateUtils.createNewDay(1, date.getTime()).getDay(),
        reactObj = this,
        selectedDate = this.props.selectedDate;

    return daysArray.map(function(day) {
      var thisDate = DateUtils.createNewDay(day, date.getTime()),
          weekNumber = Math.ceil((day + firstDay) / 7),
          selected = false;

      if (date.getMonth()==selectedDate.getMonth() && date.getFullYear()==selectedDate.getFullYear()) {
        selected = (day==selectedDate.getDate());
      }

      return <Day key={'day-mo-' + day}
                  selected={selected}
                  date={thisDate}
                  week={weekNumber}
                  changeDate={reactObj.handleSelect} />
    });
  },

  handleSelect(date) {
    this.props.handleSelect(date);
  },

  weekCount() {
    return DateUtils.weeksInMonthCount(this.props.date.getMonth(), this.props.date.getFullYear());
  },

  render() {
    return (
      <div className={this.classes()}>
        <div>
          {this.mappedMonth()}
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});
