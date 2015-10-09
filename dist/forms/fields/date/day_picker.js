'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _date_utils = require('./date_utils');

var _date_utils2 = _interopRequireDefault(_date_utils);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "DayPicker",

  propTypes: {
    date: Type.string,
    maxDate: Type.object,
    minDate: Type.object,
    selectDate: Type.func
  },

  classes: function classes() {
    var classes = ['react-datepicker-daypicker', 'relative'];
    if (this.weekCount() > 5) classes.push('extra-week');
    return classes.join(' ');
  },

  mappedMonth: function mappedMonth() {
    var date = this.props.date,
        daysArray = _date_utils2['default'].getArrayByBoundary(1, _date_utils2['default'].daysInMonthCount(date.getMonth(), date.getFullYear())),
        firstDay = _date_utils2['default'].createNewDay(1, date.getTime()).getDay(),
        reactObj = this,
        selectedDate = this.props.selectedDate;

    return daysArray.map(function (day) {
      var thisDate = _date_utils2['default'].createNewDay(day, date.getTime()),
          weekNumber = Math.ceil((day + firstDay) / 7),
          selected = false;

      if (date.getMonth() == selectedDate.getMonth() && date.getFullYear() == selectedDate.getFullYear()) {
        selected = day == selectedDate.getDate();
      }

      return _react2['default'].createElement(_day2['default'], { key: 'day-mo-' + day,
        selected: selected,
        date: thisDate,
        week: weekNumber,
        changeDate: reactObj.handleSelect });
    });
  },

  handleSelect: function handleSelect(date) {
    this.props.handleSelect(date);
  },

  weekCount: function weekCount() {
    return _date_utils2['default'].weeksInMonthCount(this.props.date.getMonth(), this.props.date.getFullYear());
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.classes() },
      _react2['default'].createElement(
        'div',
        null,
        this.mappedMonth()
      ),
      _react2['default'].createElement('div', { className: 'clearfix' })
    );
  }
});
module.exports = exports['default'];