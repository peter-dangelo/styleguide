'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "Button",

  propTypes: {
    type: Type.oneOf([null, 'danger', 'secondary', 'baby', 'previous', 'next']),
    label: Type.string,
    size: Type.oneOf([null, 'sm']),
    disabled: Type.bool,
    link: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    icon: Type.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: null,
      size: null,
      disabled: false,
      link: false,
      icon: null
    };
  },

  createClass: function createClass(value) {
    return "button-" + value;
  },

  classes: function classes() {
    var classes = [];
    var props = this.props;

    if (props.type) {
      classes.push(this.createClass(props.type));
    }

    if (props.size) {
      classes.push(this.createClass(props.size));
    }

    if (props.extraClasses) {
      classes.push(props.extraClasses.join(' '));
    }

    if (props.link === true) {
      classes.push("button-link");
    }

    if (props.icon) {
      classes.push("icon-" + this.props.icon);
    }

    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'button',
      _extends({}, this.props, { className: this.classes(), disabled: this.props.disabled }),
      this.props.label
    );
  }
});
module.exports = exports['default'];