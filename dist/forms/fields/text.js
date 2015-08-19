'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "TextField",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    placeholder: Type.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      inactive: false,
      readOnly: false
    };
  },

  label: function label() {
    if (this.props.label) {
      return _react2['default'].createElement(
        'label',
        { htmlFor: this.props.id, className: 'px2 mb1' },
        this.props.label
      );
    }
  },

  fieldClasses: function fieldClasses() {
    var classes = [];
    classes.push('field-' + this.props.fieldColor);
    return classes.join(' ');
  },

  classes: function classes() {
    var classes = ['text-field'];
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
      this.label(),
      _react2['default'].createElement('input', {
        className: this.fieldClasses(),
        disabled: this.props.disabled,
        type: 'text',
        placeholder: this.props.placeholder,
        readOnly: this.props.inactive || this.props.readOnly
      })
    );
  }
});
module.exports = exports['default'];