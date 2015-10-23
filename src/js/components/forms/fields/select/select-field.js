import FieldErrors from '../../field-errors';
import React from 'react';
import SimpleSelect from './simple-select';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "SelectField",

  propTypes: {
    disabled: Type.bool,
    errors: Type.array,
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    name: Type.string,
    onChange: Type.func,
    placeholder: Type.string,
    value: Type.oneOfType([Type.object, Type.string, Type.number])
  },

  getDefaultProps() {
    return {
      disabled: false,
      errors: [],
      fieldColor: 'light',
      onChange: function() {}
    }
  },

  getInitialState() {
    return {
      disabled: this.props.disabled || false,
      errors: this.props.errors || [],
    };
  },

  containerClasses() {
    let classes = ['select-field', 'relative'];
    if (this.state.disabled) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  label() {
    if (this.props.label) {
      return <label className="px2 mb1 relative">
               {this.props.label}
             </label>;
    }
  },

  resetErrors() {
    let errors = [];
    this.setState({errors: errors});
  },

  render() {
    return <div>
      {this.label()}
      <SimpleSelect options={{}} />
      <FieldErrors errors={this.state.errors} />
    </div>;
  }
});
