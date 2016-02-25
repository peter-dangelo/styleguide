import React from 'react';
import { fieldProps, FieldBase} from './base.es6';

const Type = React.PropTypes;

class RadioField extends FieldBase {

  constructor() {
    super();
    this.getOptions = this.getOptions.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  baseContainerClasses() {
    return ['radio-field'];
  }

  renderOption(value, index, label) {
    const {
      initialValue,
      readOnly,
      name
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
          type="radio"
          value={value}
          name={name}
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
        onChange={this.handleChange}
        ref="fieldset"
        {...{onBlur, onFocus, onKeyUp}}
      >
        {this.getOptions()}
      </fieldset>
    );
  }
};

RadioField.displayName = 'RadioField';

RadioField.propTypes = Object.assign({
  options: Type.oneOfType([Type.object, Type.array]).isRequired,
}, fieldProps);

export default RadioField;
