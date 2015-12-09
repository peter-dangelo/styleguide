'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({

  displayName: 'DummyForTest',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'span',
        null,
        'Dummy For Test'
      ),
      _react2['default'].createElement('button', { className: 'my-button', onClick: this.props.onClick })
    );
  }

});
module.exports = exports['default'];