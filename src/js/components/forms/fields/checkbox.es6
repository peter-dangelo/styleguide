import React from 'react';
import { fieldProps, FieldBase} from './base.es6';

const Type = React.PropTypes;

class CheckboxField extends FieldBase {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  baseContainerClasses() {
    return ['checkbox-field'];
  }

  onChange(e) {
    const values = [];
    const {
      elements
    } = React.findDOMNode(this.refs.fieldset);

    for (let i = 0, len = elements.length; i < len; i++) {
      let {
        checked,
        value
      } = elements.item(i);

      if (checked) {
        values.push(value);
      }
    }

    this.handleChange(values);
  }

  renderOption(value, index, label) {
    const {
      initialValue,
      readOnly
    } = this.props;

    // if options is an Array, the third argument in .map is that Array
    if (Array.isArray(label)) {
      label = null;
    }

    return (
      <label key={`${value}-${index}`} className="block py1">
        <input 
          checked={readOnly ? (initialValue === value) : null}
          defaultChecked={!readOnly && initialValue === value}
          type="checkbox"
          value={value}
        />
        <span className="label-right">{label || value}</span>
      </label>
    );
  }

  getOptions() {
    const {
      options
    } = this.props;

    if (Array.isArray(options)) {
      return options.map(this.renderOption);
    } else {
      return Object.keys(options).map((value, index) => {
        return this.renderOption(value, index, options[value]);
      });
    }
  }

  contents() {
    const {
      onBlur,
      onFocus,
      onKeyUp
    } = this.props;

    return (
      <fieldset 
        disabled={this.props.disabled}
        id={this.props.name} 
        name={this.props.name} 
        onChange={this.onChange}
        ref="fieldset"
        {...{onBlur, onFocus, onKeyUp}}
      >
        {this.getOptions()}
      </fieldset>
    );
  }
};

CheckboxField.displayName = 'CheckboxField';

CheckboxField.propTypes = Object.assign({
  options: Type.oneOfType([Type.object, Type.array]).isRequired,
}, fieldProps);

export default CheckboxField;
