import React from 'react';
import ContextualHelp from '../contextual-help';
import FieldErrors from '../field-errors';

const Type = React.PropTypes;

var fieldProps = {
  contextualHelp: Type.oneOfType([Type.object, Type.string, Type.array]),
  disabled: Type.bool,
  errors: Type.array,
  extraClasses: Type.array,
  initialValue: Type.oneOfType([Type.object, Type.string, Type.number]),
  label: Type.string,
  name: Type.string,
  onBlur: Type.func,
  onChange: Type.func,
  onFocus: Type.func,
  onKeyUp: Type.func,
  placeholder: Type.string,
  readOnly: Type.bool,
  required: Type.bool
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  baseContainerClasses() {
    return [];
  }

  containerClasses() {
    let classes = this.baseContainerClasses() || [];
    if (this.disabled()) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  }

  contextualHelp() {
    if (this.props.contextualHelp) {
      return (
        <ContextualHelp extraClasses={["pointer", "mxn1"]}>
          <p className="white m0">{this.props.contextualHelp}</p>
        </ContextualHelp>
      );
    }
  }

  disabled() {
    return this.props.disabled;
  }

  handleChange(e) {
    const newValue = typeof e === 'object' ? e.target.value : e;

    this.setState({
      errors: this.validate(newValue),
      value: newValue
    });
  }

  inputClasses() {
    let classes = ['relative', 'fit', 'pr4'];
    if (this.state.errors && this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  }

  validate() {
    if (!this.state.value && this.props.required) {
      return ['Required'];
    } else {
      return [];
    }
  }

  label() {
    if (this.props.label) {
      return (
        <label htmlFor={this.props.name} className="px2 mb1 relative" >
          {this.props.required ? (<span className="orange">* </span>) : null}
          {this.props.label}
        </label>
      );
    }
  }

  value() {
    return this.state.value;
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

FieldBase.propTypes = fieldProps;

FieldBase.defaultProps = {
  disabled: false,
  errors: [],
  onBlur: function() {},
  onChange: function() {},
  onFocus: function() {},
  onKeyUp: function() {},
  readOnly: false,
  required: false
};

export { FieldBase, fieldProps };
