import React from 'react';
import ContextualHelp from '../contextual-help';
import FieldErrors from '../field-errors';

const Type = React.PropTypes;

var fieldProps = {
  contextualHelp: Type.oneOfType([Type.object, Type.string, Type.array]),
  disabled: Type.bool,
  errors: Type.array,
  initialValue: Type.oneOfType([Type.object, Type.string, Type.number]),
  label: Type.string,
  name: Type.string,
  onBlur: Type.func,
  onChange: Type.func,
  onFocus: Type.func,
  onKeyUp: Type.func,
  placeholder: Type.string,
  readOnly: Type.bool
};

class FieldBase extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      disabled: false,
      errors: [],
      value: null
    };
  }

  componentWillMount() {
    this.setState({
      disabled: this.props.disabled,
      errors: this.props.errors.concat(this.validate(this.props.initialValue)),
      value: this.props.initialValue
    });
  }

  containerClasses() {
    let classes = this.baseContainerClasses || [];
    if (this.disabled()) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  }

  contextualHelp() {
    if (this.props.contextualHelp) {
      return (
        <ContextualHelp className="px2 mb1" >
          {this.props.contextualHelp}
        </ContextualHelp>
      );
    }
  }

  disabled() {
    return this.props.disabled;
  }

  handleChange(newValue) {
    this.setState({
      errors: this.validate(newValue),
      value: newValue
    });
    this.props.onChange();
  }

  inputClasses() {
    let classes = ['relative', 'fit', 'pr4'];
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  }

  validate() {
    return [];
  }

  label() {
    if (this.props.label) {
      return (
        <label className="px2 mb1 relative" >
          {this.props.label}
        </label>
      );
    }
  }

  contents() {
    return (
      <span>Overwrite me!</span>
    );
  }

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.contextualHelp()}
        {this.contents()}
        <div className="clearfix"></div>
        <FieldErrors errors={this.state.errors} />
      </div>
    );
  }
};

FieldBase.baseContainerClasses = [];

FieldBase.propTypes = fieldProps;

FieldBase.defaultProps = {
  disabled: false,
  errors: [],
  onBlur: function() {},
  onChange: function() {},
  onFocus: function() {},
  onKeyUp: function() {},
  readOnly: false
};

export { FieldBase, fieldProps };
