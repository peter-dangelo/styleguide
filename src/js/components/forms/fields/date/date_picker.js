import DayPicker from './day_picker'
import MonthPicker from './month_picker'
import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "ReactDatePicker",

  propTypes: {
    date: Type.object.isRequired,
    maxDate: Type.object,
    minDate: Type.object,
    onChangeDate: Type.func.isRequired,
    show: Type.bool,
    zIndex: Type.number
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
  },

  style() {
    return {
      visibility: (this.props.show ? 'visible' : 'hidden'),
      zIndex: this.props.zIndex
    };
  },

  render() {
    return (
      <div className="react-datepicker bg-grey-90 rounded-3 p3 no-select absolute" style={this.style()}>
        <div className="react-datepicker-container">
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
        </div>
      </div>
    );
  }
});
