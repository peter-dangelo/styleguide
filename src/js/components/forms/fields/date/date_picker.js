import React from 'react';
import MonthPicker from './month_picker'
import DayPicker from './day_picker'

const Type = React.PropTypes;

var DatePicker = React.createClass({

  onChangeVisibleDate: function(date) {
    this.setState({visibleDate:date});
  },

  onChangeSelectedDate: function(date) {
    this.setState({visibleDate:date});
    this.props.onChangeDate(date);
  },

  getDefaultProps: function() {
    return({
      date : new Date(),
      show : true,
      onChangeDate :
        function(date) {
          console.log('You have selected new date' + date);
        }
    });
  },

  getInitialState: function() {
    var date = new Date();
    date.setTime(this.props['date'].getTime());
    return({visibleDate:date});
  },

  changeYear: function(year) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setFullYear(year);
    this.setState({visibleDate:date});
  },

  changeMonth: function(month) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setMonth(month);
    this.setState({visibleDate:date});
  },

  render: function () {

    var style = {
      display: (this.props.show ? 'block' : 'none')
    };

    return (
      <div className="date-field-react" style={style}>
        <div className={"date-field-react-container"}>
          <MonthPicker
            date={this.state.visibleDate}
            onChangeMonth={this.changeMonth} />
          <DayPicker
            date={this.state.visibleDate}
            selectedDate={this.props.date}
            changeDate={this.onChangeVisibleDate}
            selectDate={this.onChangeSelectedDate} />
        </div>
      </div>
    );
  }
});

module.exports = DatePicker;
