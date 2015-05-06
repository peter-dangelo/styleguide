import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "SimpleSelect",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    disabled: Type.bool,
    inactive: Type.bool,
    label: Type.string,
    multiple: Type.bool,
    options: Type.object,
    promptText: Type.string,
    readOnly: Type.bool
  },

  getDefaultProps() {
    return {
      disabled: false,
      inactive: false,
      multiple: false,
      readOnly: false
    }
  },

  label() {
    if(this.props.label) {
      return <label className="px2 mb1">{this.props.label}</label>;
    }
  },

  options() {
    var options = this.props.options;
    if(this.props.promptText) {
      options.unshift({'value':'','label':this.props.promptText});
    }
    return options;
  },

  classes() {
    var classes = ['simple-select'];
    if(this.props.inactive) {
      classes.push('inactive');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <div className="relative">
          <select
            placeholder="Hi"
            multiple={this.props.multiple}
            disabled={this.props.disabled || this.props.inactive || this.props.readOnly}
          >
            {this.options().map(function(option){
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
          <span className="icon icon-arrow-double absolute right blue mxn3"></span>

        </div>
      </div>
  }
});
