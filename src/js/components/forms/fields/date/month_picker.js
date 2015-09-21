import React from 'react';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Type = React.PropTypes;

export default React.createClass({

  displayName: "MonthPicker",

  getDefaultProps() {
    return {
      buttonClassNames : "btn btn-xs btn-default",
      textClassNames : "btn btn-xs"
    };
  },

  changeMonth(month) {
    this.props.onChangeMonth(month);
  },

  render() {
    return (
      <div className="month-picker">
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()-1)} className="icon-chevron-left prev mr2 blue-secondary"></a>
        <span className={"white semibold " + this.props.textClassNames}>{months[this.props.date.getMonth()] + ", " + this.props.date.getFullYear()}</span>
        <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()+1)} className="icon-chevron-right next ml2 blue-secondary"></a>
        <div className="mt1 mb1 week-labels relative">
          <span className='day-in-week-0 grey-50 inline-block' key='week-label-0'>SU</span>
          <span className='day-in-week-1 grey-50 inline-block' key='week-label-1'>MO</span>
          <span className='day-in-week-2 grey-50 inline-block' key='week-label-2'>TU</span>
          <span className='day-in-week-3 grey-50 inline-block' key='week-label-3'>WE</span>
          <span className='day-in-week-4 grey-50 inline-block' key='week-label-4'>TH</span>
          <span className='day-in-week-5 grey-50 inline-block' key='week-label-5'>FR</span>
          <span className='day-in-week-6 grey-50 inline-block' key='week-label-6'>SA</span>
        </div>
      </div>
    );
  }
});
