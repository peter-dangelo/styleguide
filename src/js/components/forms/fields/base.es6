import ContextualHelp from '../../overlays/contextual-help';
import FieldErrors from '../field-errors';
import { Component, PropTypes } from 'react';

var FieldBase = ComposedField => class FieldBase extends Component {

  constructor(props) {
    super()
  },

  className: 'field',

  displayName: 'FieldBase',

  propTypes: {
    disabled: PropTypes.bool,
    errors: PropTypes.array,
    initialtValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool
  },

  getDefaultProps() {
    return {
      disabled: false,
      errors: [],
      onBlur: function() {},
      onChange: function() {},
      onFocus: function() {},
      onKeyUp: function() {},
      readOnly: false
    };
  },

  getInitialState() {
    return {
      errors: this.props.errors || [],
      value: this.props.initialValue
    };
  },

  componentDidMount() {
    initialErrors = this.isValid();

    if (!!this.props.defaultValue && initalErrors.length > 0) {
      this.setState({
        errors: ['Invalid value']
      });
    }
  },

  containerClasses() {
    let classes = [this.className];
    if (this.disabled()) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  contextualHelp() {
    if (this.props.contextualHelp) {
      return (
        <ContextualHelp className="px2 mb1" >
          {this.props.contextualHelp}
        </ContextualHelp>
      );
    }
  },

  disabled() {
    return this.props.disabled;
  },

  handleBlur() {
    this.props.onBlur();
  },

  handleChange() {
    this.props.onChange();
  },

  handleFocus() {
    this.props.onFocus();
  },

  handleKeyUp() {
    this.props.onKeyUp();
  },

  inputClasses() {
    let classes = ['relative', 'fit', 'pr4'];
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  },

  isValid() {
    return true;
  },

  label() {
    if (this.props.label) {
      return (
        <label className="px2 mb1 relative" >
          {this.props.label}
        </label>
      );
    }
  },

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.contextualHelp()}
        <WrappedField {...childProps} {this.state} />
        <div className="clearfix"></div>
        <FieldErrors errors={this.state.errors} />
      </div>
    );
  }
});

export default FieldBase;
