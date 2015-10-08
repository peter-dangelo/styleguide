import React from 'react';
import Moment from 'moment';
import MonthPicker from './month_picker'
import DayPicker from './day_picker'

const Type = React.PropTypes;

export default React.createClass({

  displayName: "ReactDateField",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    onChangeDate: Type.func,
    show: Type.bool
  },

  getDefaultProps() {
    return({
      show : true
    });
  },

  getInitialState() {
    var date = new Date();
    date.setTime(this.props.date.getTime());
    return({visibleDate:date});
  },

  changeMonth(month) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setMonth(month);
    this.setState({visibleDate:date});
  },

  changeYear(year) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setFullYear(year);
    this.setState({visibleDate:date});
  },

  handleSelect(date) {
    this.setState({visibleDate:date});
    this.props.onChangeDate(date);
  },

  onChangeVisibleDate(date) {
    this.setState({visibleDate:date});
  },

  style() {
    return {
      visibility: (this.props.show ? 'visible' : 'hidden'),
      zIndex: this.props.zIndex
    };
  },

  render() {
    return (
      <div className="date-field-react bg-grey-90 rounded-3 p3 no-select" style={this.style()}>
        <div className="date-field-react-container">
          <MonthPicker
            date={this.state.visibleDate}
            onChangeMonth={this.changeMonth} />
          <DayPicker
            date={this.state.visibleDate}
            excludedDates={this.props.excludedDates}
            selectedDate={this.props.date}
            changeDate={this.onChangeVisibleDate}
            handleSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
});
