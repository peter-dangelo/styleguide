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

  render: function render() {
    return _react2['default'].createElement('i', { className: 'icon-' + this.props.name });
  }
});
module.exports = exports['default'];