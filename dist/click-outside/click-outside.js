'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "ClickOutside",

  propTypes: {
    onClickOutside: Type.func.isRequired
  },

  componentDidMount: function componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  },

  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  },

  onDocumentClick: function onDocumentClick(e) {
    var componentNode = this.getDOMNode();
    var targetNode = e.target;
    if (!componentNode.contains(targetNode)) {
      try {
        this.props.onClickOutside();
      } catch (e) {
        console.log(e, 'The click-outside component requires an onClickOutside function prop');
      }
    }
  },

  render: function render() {
    return this.props.children;
  }

});
module.exports = exports['default'];