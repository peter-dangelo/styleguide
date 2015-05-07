import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Checkbox",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    inactive: Type.bool,
    label: Type.string.isRequired,
    placeholder: Type.string,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps() {
    return {
      checked: false,
      inactive: false,
      readonly: false
    }
  },

  getInitialState() {
    return { isChecked: this.props.checked };
  },

  onChange() {
    if(!this.props.readOnly) {
      this.setState({isChecked: !this.state.isChecked})
    }
  },

  classes() {
    var classes = ['checkbox-field'];
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
    return <div className={this.classes()}>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
            disabled={this.props.readOnly || this.props.inactive}
            readOnly={this.props.readOnly || this.props.inactive}>
          </input>
          <span className="label-right">{this.props.label}</span>
        </label>
      </div>
  }
});
