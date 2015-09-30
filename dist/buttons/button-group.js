'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

/**
 * @desc 
 * A container component to layout a group of Buttons
 *
 * @module buttons/button-group
 */
exports['default'] = _react2['default'].createClass({
  displayName: "ButtonGroup",

  propTypes: {
    type: Type.oneOf(['actions']),
    children: Type.node.isRequired,
    extraClasses: Type.arrayOf(Type.string)
  },

  createClass: function createClass(value) {
    return "button-group-" + value;
  },

  classes: function classes() {
    var classes = ["button-group"];
    var props = this.props;

    if (props.type) {
      classes.push(this.createClass(props.type));
    }

    if (props.extraClasses) {
      classes.push(props.extraClasses.join(' '));
    }

    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.classes() },
      this.props.children
    );
  }
});
module.exports = exports['default'];