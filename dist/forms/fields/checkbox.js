'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "Checkbox",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string.isRequired,
    placeholder: Type.string,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      disabled: false,
      fieldColor: 'light',
      readonly: false
    };
  },

  getInitialState: function getInitialState() {
    return { isChecked: this.props.checked };
  },

  onChange: function onChange() {
    if (!this.props.readOnly) {
      this.setState({ isChecked: !this.state.isChecked });
    }
  },

  fieldClasses: function fieldClasses() {
    var classes = [];
    classes.push('field-' + this.props.fieldColor);
    return classes.join(' ');
  },

  classes: function classes() {
    var classes = ['checkbox-field'];
    if (this.props.readOnly) {
      classes.push('read-only');
    }
    if (this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.classes() },
      _react2['default'].createElement(
        'label',
        null,
        _react2['default'].createElement('input', {
          checked: this.state.isChecked,
          className: this.fieldClasses(),
          disabled: this.props.disabled,
          onChange: this.onChange,
          readOnly: this.props.readOnly,
          type: 'checkbox'
        }),
        _react2['default'].createElement(
          'span',
          { className: 'label-right' },
          this.props.label
        )
      )
    );
  }
});
module.exports = exports['default'];