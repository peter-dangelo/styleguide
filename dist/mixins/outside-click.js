'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// This mixin requires a handleOutsideClick method to be defined within the component using it.
// Also, any other click handlers in the component should use event.stopPropagation to prevent the event from bubbling to the window

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;
exports['default'] = {

  componentDidMount: function componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  },

  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  },

  _handleDocumentClick: function _handleDocumentClick(e) {
    var target = e.target;
    var component = this.getDOMNode();

    if (component === target || component.contains(target)) {
      return true;
    } else {
      if (this.handleOutsideClick) {
        this.handleOutsideClick(e);
      } else {
        throw new Error('handleOutsideClick is not a defined method in this component.');
      }
    }
  }
};
module.exports = exports['default'];