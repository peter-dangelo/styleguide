import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextField",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    placeholder: Type.string,
    inactive: Type.bool
  },

  getDefaultProps() {
    return {
      inactive: false,
      readOnly: false
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  classes() {
    var classes = ['text-field'];
    if(this.props.inactive) {
      classes.push('inactive');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <br/>
        <input
          type="text"
          placeholder={this.props.placeholder}
          readOnly={this.props.inactive || this.props.readOnly}
        ></input>
      </div>
  }
});
