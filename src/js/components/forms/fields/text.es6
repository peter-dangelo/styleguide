import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "TextField",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    name: Type.string,
    placeholder: Type.string
  },

  getDefaultProps() {
    return {
      disabled: false,
      inactive: false,
      readOnly: false
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.name} className="px2 mb1">{this.props.label}</label>;
    }
  },

  classes() {
    var classes = ['text-field'];
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <input disabled={this.props.disabled}
               type="text"
               name={this.props.name}
               id={this.props.name}
               placeholder={this.props.placeholder}
               readOnly={this.props.inactive || this.props.readOnly} />
      </div>
  }
});
