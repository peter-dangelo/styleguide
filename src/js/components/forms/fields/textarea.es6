import React from 'react';
import { fieldProps, FieldBase} from './base.es6';

const Type = React.PropTypes;

class TextAreaField extends FieldBase {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.expandable) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    this.handleChange(e.target.value);
  }

  baseContainerClasses() {
    return ['textarea'];
  }

  contents() {
    const {
      onBlur,
      onFocus,
      onKeyUp
    } = this.props;

    return <textarea disabled={this.props.disabled}
              readOnly={this.props.readOnly}
              placeholder={this.props.placeholder}
              name={this.props.name}
              defaultValue={this.state.value}
              id={this.props.name}
              {...{onBlur, onFocus, onKeyUp}}
              onChange={this.onChange} />
  }
};

TextAreaField.displayName = "TextAreaField";

TextAreaField.propTypes = Object.assign({
  expandable: Type.bool
}, fieldProps);

TextAreaField.defaultProps = Object.assign({
  expandable: false
}, FieldBase.defaultProps);

export default TextAreaField;
