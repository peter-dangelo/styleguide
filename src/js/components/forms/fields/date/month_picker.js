import Moment from 'moment'
import React from 'react';

var months = ["January", "February", "March", "April",
              "May", "June", "July", "August",
              "September", "October", "November", "December"];

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

  displayNext() {
    if (!!this.props.maxDate) {
      return this.momentDate().endOf('month').add(1, 'day').isAfter(Moment(this.props.maxDate));
    } else {
      return true;
    }
  },

  displayPrev() {
    if (!!this.props.minDate) {
      return this.momentDate().startOf('month').subtract(1, 'day').isBefore(Moment(this.props.minDate));
    } else {
      return true;
    }
  },

  momentDate() {
    return Moment(this.props.date);
  },

  nextIcon() {
    if (this.displayNext()) {
      return <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()-1)}
                className="icon-chevron-left prev mr2 blue-50"></a>
    } else {
      return '';
    }
  },

  prevIcon() {
    if (this.displayPrev()) {
      return <a onClick={this.changeMonth.bind(this, this.props.date.getMonth()+1)}
                className="icon-chevron-right next ml2 blue-50"></a>
    } else {
      return '';
    }
  },

  render() {
    return (
      <div className="react-datepicker-monthpicker center">
        {this.nextIcon()}
        <div className={"month-name inline-block white semibold " + this.props.textClassNames}>
          {months[this.props.date.getMonth()] + " " + this.props.date.getFullYear()}
        </div>
        {this.prevIcon()}
        <div className="mt1 mb1 week-labels relative">
          <span className='day-in-week-0 grey-50 inline-block h6' key='week-label-0'>SU</span>
          <span className='day-in-week-1 grey-50 inline-block h6' key='week-label-1'>MO</span>
          <span className='day-in-week-2 grey-50 inline-block h6' key='week-label-2'>TU</span>
          <span className='day-in-week-3 grey-50 inline-block h6' key='week-label-3'>WE</span>
          <span className='day-in-week-4 grey-50 inline-block h6' key='week-label-4'>TH</span>
          <span className='day-in-week-5 grey-50 inline-block h6' key='week-label-5'>FR</span>
          <span className='day-in-week-6 grey-50 inline-block h6' key='week-label-6'>SA</span>
        </div>
      </div>
    );
  }
});
