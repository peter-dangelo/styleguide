'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _day_picker = require('./day_picker');

var _day_picker2 = _interopRequireDefault(_day_picker);

var _month_picker = require('./month_picker');

var _month_picker2 = _interopRequireDefault(_month_picker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "DatePicker",

  propTypes: {
    date: Type.object.isRequired,
    maxDate: Type.object,
    minDate: Type.object,
    onChangeDate: Type.func.isRequired,
    show: Type.bool,
    zIndex: Type.number
  },

  getInitialState: function getInitialState() {
    return {
      visibleMonth: this.props.date.month(),
      visibleYear: this.props.date.year()
    };
  },

  changeMonth: function changeMonth(month, year) {
    this.setState({
      visibleMonth: month,
      visibleYear: year
    });
  },

  changeDate: function changeDate(date) {
    this.props.onChangeDate(date);
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
      { className: 'datepicker bg-grey-90 rounded-3 p3 no-select absolute', style: this.style() },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_month_picker2['default'], { maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onChangeMonth: this.changeMonth,
          visibleMonth: this.state.visibleMonth,
          visibleYear: this.state.visibleYear }),
        _react2['default'].createElement(_day_picker2['default'], { date: this.props.date,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onChangeDate: this.changeDate,
          visibleMonth: this.state.visibleMonth,
          visibleYear: this.state.visibleYear })
      )
    );
  }
});
module.exports = exports['default'];