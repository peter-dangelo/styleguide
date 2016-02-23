import React from 'react';
import { FieldBase, fieldProps } from './base.es6';

const Type = React.PropTypes;

class TextField extends FieldBase {
  constructor() {
    super();
  }

  baseContainerClasses() {
    return ['text-field'];
  }

  contents() {
    return <input disabled={this.props.disabled}
             type="text"
             id={this.props.name}
             placeholder={this.props.placeholder}
             onChange={this.handleChange}
             readOnly={this.props.inactive || this.props.readOnly} />
  }
};

TextField.displayName = 'TextField';

TextField.propTypes = Object.assign({
  inactive: Type.bool
}, fieldProps);

TextField.defaultProps = Object.assign({
  inactive: false
}, FieldBase.defaultProps);

export default TextField;
