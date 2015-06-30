'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: 'TextArea',

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    placeholder: Type.string,
    readOnly: Type.bool,
    expandable: Type.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fieldColor: 'light',
      readOnly: false,
      expandable: false
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

  expand: function expand(e) {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  },

  fieldClasses: function fieldClasses() {
    var classes = [];
    classes.push('field-' + this.props.fieldColor);
    return classes.join(' ');
  },

  classes: function classes() {
    var classes = ['textarea'];
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
      this.label(),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement('textarea', {
        className: this.fieldClasses(),
        disabled: this.props.disabled,
        readOnly: this.props.readOnly,
        placeholder: this.props.placeholder,
        onChange: this.props.expandable ? this.expand : null
      })
    );
  }
});
module.exports = exports['default'];