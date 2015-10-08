import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Day",

  handleClick(e) {
    e.preventDefault();
    if (!this.props.disabled) this.props.changeDate( this.props.date );
  },

  getDefaultProps() {
    return {
      disabled: false,
      highlighted: false,
      selected: false
    };
  },

  propTypes: {
    changeDate: Type.func,
    disabled: Type.bool,
    selected: Type.bool,
    week: Type.number
  },

  classes() {
    var classes = [ "date-field-react-day",
                    "absolute",
                    "week-" + this.props.week,
                    "day-in-week-" + this.props.date.getDay() ];

    if (this.props.selected) classes.push('bc-blue-50 bg-grey-95 bw-1 b white');
    else if (this.props.disabled) classes.push('disabled grey-75 cursor-n');
    else classes.push('grey-25');

    return classes.join(' ');
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
