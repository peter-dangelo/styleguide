'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _month_picker = require('./month_picker');

var _month_picker2 = _interopRequireDefault(_month_picker);

var _day_picker = require('./day_picker');

var _day_picker2 = _interopRequireDefault(_day_picker);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "ReactDateField",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    onChangeDate: Type.func,
    show: Type.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      show: true
    };
  },

  getInitialState: function getInitialState() {
    var date = new Date();
    date.setTime(this.props.date.getTime());
    return { visibleDate: date };
  },

  changeMonth: function changeMonth(month) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setMonth(month);
    this.setState({ visibleDate: date });
  },

  changeYear: function changeYear(year) {
    var date = new Date();
    date.setTime(this.state.visibleDate.getTime());
    date.setFullYear(year);
    this.setState({ visibleDate: date });
  },

  handleSelect: function handleSelect(date) {
    this.setState({ visibleDate: date });
    this.props.onChangeDate(date);
  },

  onChangeVisibleDate: function onChangeVisibleDate(date) {
    this.setState({ visibleDate: date });
  },

  style: function style() {
    return {
      visibility: this.props.show ? 'visible' : 'hidden',
      zIndex: this.props.zIndex
    };
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'react-datepicker bg-grey-90 rounded-3 p3 no-select absolute', style: this.style() },
      _react2['default'].createElement(
        'div',
        { className: 'react-datepicker-container' },
        _react2['default'].createElement(_month_picker2['default'], {
          date: this.state.visibleDate,
          onChangeMonth: this.changeMonth }),
        _react2['default'].createElement(_day_picker2['default'], {
          date: this.state.visibleDate,
          excludedDates: this.props.excludedDates,
          selectedDate: this.props.date,
          changeDate: this.onChangeVisibleDate,
          handleSelect: this.handleSelect })
      )
    );
  }
});
module.exports = exports['default'];