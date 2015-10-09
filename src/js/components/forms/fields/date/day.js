import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Day",

  propTypes: {
    changeDate: Type.func,
    disabled: Type.bool,
    selected: Type.bool,
    week: Type.number
  },

  getDefaultProps() {
    return {
      disabled: false,
      highlighted: false,
      selected: false
    };
  },

  classes() {
    var classes = [ "absolute",
                    "react-datepicker-day",
                    "day-in-week-" + this.props.date.getDay(),
                    "week-" + this.props.week ];

    if (this.props.selected) classes.push('bc-blue-50 bg-grey-95 bw-1 b white');
    else if (this.props.disabled) classes.push('disabled grey-75 cursor-n');
    else classes.push('grey-25');

    return classes.join(' ');
  },

  handleClick(e) {
    e.preventDefault();
    if (!this.props.disabled) this.props.changeDate( this.props.date );
  },

  render() {
    return (
      <div className={this.classes()}>

        <a className="semibold block center c-fade h4"
           href="#"
           onClick={this.handleClick}>
          {this.props.date.getDate()}
        </a>
      </div>
    );
  }
});
