import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextArea",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    placeholder: Type.string,
    readOnly: Type.bool,
    inactive: Type.bool
  },

  getDefaultProps() {
    return {
      readOnly: false,
      inactive: false
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  classes() {
    var classes = ['textarea'];
    if(this.props.readOnly) {
      classes.push('read-only');
    }
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
        <textarea
          className=""
          readOnly={this.props.readOnly || this.props.inactive}
          placeholder={this.props.placeholder}
        />
      </div>
  }
});
