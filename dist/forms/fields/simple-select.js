'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashFind = require('lodash.find');

var _lodashFind2 = _interopRequireDefault(_lodashFind);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "SimpleSelect",

  componentWillMount: function componentWillMount() {
    this.setState({ value: this.props.value });
  },

  onClickOption: function onClickOption(option, e) {
    e.preventDefault();
    this.setState({ value: option.value });
  },

  render: function render() {
    var _this = this;

    console.log('find', _lodashFind2['default']);

    var options = this.props.options.map(function (option) {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'a',
          { href: '#', onClick: _this.onClickOption.bind(_this, option) },
          option.label
        )
      );
    });

    var value = _react2['default'].createElement(
      'div',
      null,
      this.state.value
    );

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'orange' },
        'SELECT'
      ),
      _react2['default'].createElement('input', { type: 'hidden', name: this.props.name, value: this.state.value, disabled: this.props.disabled }),
      value,
      options
    );
  }
});
module.exports = exports['default'];