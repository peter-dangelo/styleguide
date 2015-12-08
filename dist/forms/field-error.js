'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var createClass = _react2['default'].createClass;
var Type = _react2['default'].PropTypes;
exports['default'] = createClass({
  displayName: 'FieldError',

  propTypes: {
    message: Type.string.isRequired
  },

  render: function render() {
    return _react2['default'].createElement(
      'span',
      { className: 'orange small semibold' },
      _react2['default'].createElement(_icon2['default'], { name: 'alert', extraClasses: ['mr1'] }),
      this.props.message
    );
  }
});
module.exports = exports['default'];