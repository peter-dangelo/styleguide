import React from 'react';
import { fieldProps, FieldBase} from './base.es6';

const Type = React.PropTypes;

class TextField extends FieldBase {

  constructor() {
    super();
  }

  baseContainerClasses() {
    return ['text-field'];
  }

  contents() {
    const {
      onBlur,
      onFocus,
      onKeyUp
    } = this.props;

    return <input disabled={this.props.disabled}
             type="text"
             id={this.props.name}
             name={this.props.name}
             defaultValue={this.state.value}
             onChange={(e) => this.handleChange(e.target.value)}
             {...{onBlur, onFocus, onKeyUp}}
             placeholder={this.props.placeholder}
             readOnly={this.props.readOnly} />
  }
};

TextField.displayName = 'TextField';

export default TextField;
