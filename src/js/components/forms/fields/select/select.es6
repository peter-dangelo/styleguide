import React from 'react';
import SimpleSelect from './simple-select';
import { fieldProps, FieldBase} from '../base.es6';
import omit from '../../../utils/omit';

const Type = React.PropTypes;

class SelectField extends FieldBase {

  constructor() {
    super();
  }

  baseContainerClasses() {
    return ['select-field', 'relative'];
  }

  contents() {
    const spreadProps = omit(this.props, 'onChange');

    return (
        <SimpleSelect ref='simpleSelect'
                      hasError={this.state.errors.length > 0}
                      id={this.props.name}
                      onChange={this.handleChange}
                      value={this.props.initialValue}
                      {...spreadProps} />
    );
  }
};

SelectField.displayName = "SelectField";

SelectField.propTypes = Object.assign({
  includeBlank: Type.oneOfType([Type.bool, Type.string]),
  options: Type.oneOfType([Type.object, Type.array]).isRequired
}, fieldProps);

export default SelectField;
