import React from 'react';
import FieldBase from './base.es6';

const Type = React.PropTypes;

class TextAreaField extends FieldBase {
  constructor() {
    super();
    this.expand = this.expand.bind(this);
  }

  expand(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    // this.handleChange(e);
  }

  baseContainerClasses() {
    return ['textarea'];
  }

  contents() {
    return <textarea disabled={this.props.disabled}
              readOnly={this.props.readOnly}
              placeholder={this.props.placeholder}
              onChange={this.props.expandable ? this.expand : null} />
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
