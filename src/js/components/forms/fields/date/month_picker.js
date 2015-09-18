import React from 'react';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa",]

var MonthPicker = React.createClass({
  getDefaultProps: function() {
    return {
      buttonClassNames : "btn btn-xs btn-default",
      textClassNames : "btn btn-xs"
    };
  },

  changeMonth : function(month) {
    this.props.onChangeMonth(month);
  },

  render: function() {
    return (
      <div className="month-picker">
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()-1)} className={this.props.buttonClassNames}>&lt;&lt;</a>
        <span className={this.props.textClassNames}>{months[this.props.date.getMonth()] + ", " + this.props.date.getFullYear()}</span>
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()+1)} className={this.props.buttonClassNames}>&gt;&gt;</a>
      </div>
    );
  }
});

module.exports = MonthPicker;
