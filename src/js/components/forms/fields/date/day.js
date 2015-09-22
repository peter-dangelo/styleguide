import React from 'react';
import DateUtils from './date_utils';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Day",

  handleClick(e) {
    e.preventDefault();
    this.props.changeDate(this.props.date);
  },

  getDefaultProps() {
    return {selected: false};
  },

  render() {
    var className = "date-field-react-day week-" + this.props.week + " day-in-week-" + DateUtils.offsetDayOfWeek(this.props.date.getDay());
    className += (this.props.selected ? ' bc-blue-secondary bg-grey-95 bw-1 white' : ' grey-25');

    return (
      <div className={className}>
        <a className="semibold" href="#" onClick={this.handleClick}>{this.props.date.getDate()}</a>
      </div>
    );
  }
});
