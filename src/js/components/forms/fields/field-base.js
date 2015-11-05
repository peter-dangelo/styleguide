import FieldErrors from '../../field-errors';
import React, { Component } from 'react';

const Type = React.PropTypes;

class FieldBase extends React.Component {

  constructor() {
    this.state = {
      disabled: this.props.disabled || false,
      errors: this.props.errors || []
    }
  },

  extraClasses() {
    let classes = [];
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  handleChange(e) {
    this.props.onChange();
    this.resetErrors();
  },

  label() {
    if (this.props.label) {
      return (
        <label className="px2 mb1 relative">
          {this.props.label}
        </label>
      );
    }
  },

  resetErrors() {
    this.setState({errors: []});
  },
});

Field.propTypes = {
  disabled: Type.bool,
  errors: Type.array,
  extraClasses: Type.array,
  fieldColor: Type.oneOf(['light', 'dark']),
  label: Type.string,
  name: Type.string,
  onChange: Type.func,
  placeholder: Type.string,
  value: Type.oneOfType([Type.object, Type.string, Type.number])
};

Field.defaultProps = {
  disabled: false,
  errors: [],
  fieldColor: 'light',
  onChange: function() {},
  value: null
};
