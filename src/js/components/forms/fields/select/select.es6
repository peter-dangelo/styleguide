import React from 'react';
import SimpleSelect from './simple-select';
import { fieldProps, FieldBase} from '../base.es6';

const Type = React.PropTypes;

class SelectField extends FieldBase {

  constructor() {
    super();
  }

  baseContainerClasses() {
    return ['select-field', 'relative'];
  }

  contents() {
    const {
      onBlur,
      onFocus,
      onKeyUp
    } = this.props;

    return (
        <SimpleSelect ref='simpleSelect'
                      disabled={this.props.disabled}
                      hasError={this.state.errors.length > 0}
                      id={this.props.name}
                      includeBlank={this.props.includeBlank}
                      name={this.props.name}
                      onChange={this.handleChange}
                      {...{onBlur, onFocus, onKeyUp}}
                      options={this.props.options}
                      placeholder={this.props.placeholder}
                      value={this.props.initialValue} />
    );
  }
};

SelectField.displayName = "SelectField";

SelectField.propTypes = Object.assign({
  includeBlank: Type.oneOfType([Type.bool, Type.string]),
  options: Type.oneOfType([Type.object, Type.array]).isRequired
}, fieldProps);

export default SelectField;
