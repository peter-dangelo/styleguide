import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "DateField",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
  },

  getDefaultProps() {
    return {
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  classes() {
    var classes = ['date-field'];
    if(this.props.inactive) {
      classes.push('inactive');
    }
    if(this.props.readOnly) {
      classes.push('read-only');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <br/>
        <input
          readOnly={this.props.readOnly || this.props.inactive}
          type="text">
        </input>
        <span className="icon icon-calendar"></span>
      </div>
  }
});
