import DayPicker from './day-picker'
import MonthPicker from './month-picker'
import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "DatePicker",

  propTypes: {
    closeOverlay: Type.func,
    date: Type.object.isRequired,
    maxDate: Type.object,
    minDate: Type.object,
    onChangeDate: Type.func.isRequired
  },

  getDefaultProps() {
    return {
      closeOverlay: function() {}
    };
  },

  getInitialState() {
    return {
      visibleMonth: this.props.date.month(),
      visibleYear: this.props.date.year()
    };
  },

  changeMonth(month, year) {
    this.setState({
      visibleMonth: month,
      visibleYear: year
    });
  },

  changeDate(date) {
    this.props.onChangeDate(date);
    this.props.closeOverlay();
  },

  render() {
    return (
      <div className="datepicker no-select">
        <div>
          <MonthPicker maxDate={this.props.maxDate}
                       minDate={this.props.minDate}
                       onChangeMonth={this.changeMonth}
                       visibleMonth={this.state.visibleMonth}
                       visibleYear={this.state.visibleYear} />
          <DayPicker date={this.props.date}
                     maxDate={this.props.maxDate}
                     minDate={this.props.minDate}
                     onChangeDate={this.changeDate}
                     visibleMonth={this.state.visibleMonth}
                     visibleYear={this.state.visibleYear} />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
});
