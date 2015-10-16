'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _date_picker = require('./date_picker');

var _date_picker2 = _interopRequireDefault(_date_picker);

var _fieldError = require('../../field-error');

var _fieldError2 = _interopRequireDefault(_fieldError);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

// Note: The value of date.month() for 1/1/2015 is 0, not 1

var validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

exports['default'] = _react2['default'].createClass({

  displayName: "DateField",

  // The rest of the child components all use Moment objects for dates.
  propTypes: {
    date: Type.oneOfType([Type.object, Type.string, Type.number]),
    dateFormat: Type.oneOf(validDateFormats),
    disabled: Type.bool,
    errors: Type.array,
    fieldColor: Type.oneOf(['light', 'dark']),
    includeMaxMinBounds: Type.bool,
    label: Type.string,
    maxDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    minDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    onChange: Type.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      date: new Date(),
      disabled: false,
      errors: [],
      fieldColor: 'light',
      includeMaxMinBounds: true,
      label: 'Date',
      onChange: function onChange() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      date: this.momentDate(this.props.date),
      disabled: this.props.disabled || !this.isFormatValid() || !this.isDateValid(this.props.date),
      errors: this.initErrors(),
      show: false
    };
  },

  baseZIndex: function baseZIndex() {
    return this.state.show ? 300 : 1;
  },

  boundedMaxDate: function boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  },

  boundedMinDate: function boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  },

  changeDate: function changeDate(date) {
    this.setState({ date: date });
    this.hideDatePicker();
    this.props.onChange(date);
  },

  containerClasses: function containerClasses() {
    var classes = ['date-field', 'relative'];
    if (this.state.disabled) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  datePicker: function datePicker() {
    if (this.state.show) {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('div', { className: 'modal-clear-bg',
          onClick: this.hideDatePicker,
          style: { zIndex: this.baseZIndex() - 2 } }),
        _react2['default'].createElement(_date_picker2['default'], { date: this.state.date,
          maxDate: this.boundedMaxDate(),
          minDate: this.boundedMinDate(),
          onChangeDate: this.changeDate,
          show: this.state.show,
          zIndex: this.baseZIndex() - 1 })
      );
    }
  },

  fieldError: function fieldError() {
    if (this.state.errors.length > 0) {
      return _react2['default'].createElement(_fieldError2['default'], { message: this.state.errors.join('; ') });
    }
  },

  hideDatePicker: function hideDatePicker() {
    this.resetErrors();
    this.setState({ show: false });
  },

  iconClasses: function iconClasses() {
    var classes = ['icon', 'icon-calendar', 'ml1', 'absolute'];
    this.state.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  initErrors: function initErrors() {
    var errors = this.props.errors || [];
    if (!this.isDateValid(this.props.date)) errors.push('Error parsing date');
    if (!this.isFormatValid()) errors.push('Invalid date format');
    return errors;
  },

  inputClasses: function inputClasses() {
    var classes = ['relative', 'fit', 'pr5'];
    classes.push('field-' + this.props.fieldColor);
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  },

  isDateValid: function isDateValid() {
    var date = arguments.length <= 0 || arguments[0] === undefined ? this.state.date : arguments[0];

    return this.momentDate(date).isValid();
  },

  isFormatValid: function isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  },

  label: function label() {
    if (this.props.label) {
      return _react2['default'].createElement(
        'label',
        { onClick: this.showDatePicker, className: 'px2 mb1' },
        this.props.label
      );
    }
  },

  momentDate: function momentDate(date) {
    if (!!date) {
      switch (date.constructor.name) {
        case "Date":
        case "Number":
          return (0, _moment2['default'])(date);
        case "Moment":
          return date;
        case "String":
          return (0, _moment2['default'])(date, this.props.dateFormat);
        default:
          return null;
      }
    } else {
      return null;
    }
  },

  resetErrors: function resetErrors() {
    var errors = [];
    if (!this.isDateValid()) errors.push('Error parsing date');
    this.setState({ errors: errors });
  },

  showDatePicker: function showDatePicker() {
    if (!this.state.disabled) this.setState({ show: true });
  },

  value: function value() {
    if (this.isFormatValid()) {
      if (this.isDateValid()) {
        return this.momentDate(this.state.date).format(this.props.dateFormat);
      } else {
        return "Couldn't parse date";
      }
    } else {
      return "Invalid date format";
    }
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.containerClasses() },
      this.label(),
      this.fieldError(),
      _react2['default'].createElement('br', null),
      this.datePicker(),
      _react2['default'].createElement(
        'div',
        { className: 'relative rounded-2 overflow-hidden no-select',
          style: { zIndex: this.baseZIndex() } },
        _react2['default'].createElement('input', { className: this.inputClasses(),
          disabled: this.state.disabled,
          onFocus: this.showDatePicker,
          readOnly: true,
          type: 'text',
          value: this.value() }),
        _react2['default'].createElement('span', { className: this.iconClasses(),
          onClick: this.showDatePicker,
          style: { zIndex: this.baseZIndex() + 2 } })
      ),
      _react2['default'].createElement('div', { className: 'clearfix' })
    );
  }
});
module.exports = exports['default'];