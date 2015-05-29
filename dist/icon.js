'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: 'Icon',

  propTypes: {
    name: Type.string.isRequired,
    extraClasses: Type.arrayOf(Type.string)
  },

  getDefaultProps: function getDefaultProps() {
    return {
      extraClasses: []
    };
  },

  classes: function classes() {
    var classes = ['icon-' + this.props.name];

    if (this.props.extraClasses) {
      classes = classes.concat(this.props.extraClasses);
    }

    return classes.join(' ');
  },

  render: function render() {
    var name = this.props.name;

    return _react2['default'].createElement('i', { className: this.classes(), onClick: this.props.onClick });
  }
});
module.exports = exports['default'];