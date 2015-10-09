'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _date_picker = require('./date_picker');

var _date_picker2 = _interopRequireDefault(_date_picker);

var _date_utils = require('./date_utils');

var _date_utils2 = _interopRequireDefault(_date_utils);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "ReactDateField",

  propTypes: {
    dateFormat: Type.oneOf(_date_utils2['default'].validFormats),
    disabled: Type.bool,
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    onChange: Type.func
  },

  // value: Type.oneOfType([Type.string, Type.date])
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      label: 'Date',
      onChange: function onChange() {},
      value: new Date()
    };
  },

  getInitialState: function getInitialState() {
    return { show: false };
  },

  baseZIndex: function baseZIndex() {
    return this.state.show ? 300 : 1;
  },

  containerClasses: function containerClasses() {
    var classes = ['date-field', 'react-datepicker-container', 'relative'];
    if (this.props.disabled) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  datePicker: function datePicker() {
    if (this.state.show) {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('div', {
          className: 'modal-clear-bg',
          onClick: this.hideDatePicker,
          style: { zIndex: this.baseZIndex() - 2 } }),
        _react2['default'].createElement(_date_picker2['default'], {
          zIndex: this.baseZIndex() - 1,
          date: this.momentDate().toDate(),
          show: this.state.show,
          onChangeDate: this.onChangeDate })
      );
    }
  },

  fieldClasses: function fieldClasses() {
    var classes = ['relative', 'fit', 'pr5'];
    classes.push('field-' + this.props.fieldColor);
    return classes.join(' ');
  },

  hideDatePicker: function hideDatePicker() {
    this.setState({ show: false });
  },

  iconClasses: function iconClasses() {
    var classes = ['icon', 'icon-calendar', 'ml1', 'absolute'];
    this.props.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
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

  momentDate: function momentDate() {
    if (Object.prototype.toString.call(this.props.value) === '[object Date]') {
      return (0, _moment2['default'])(this.props.value);
    } else {
      return (0, _moment2['default'])(this.props.value, this.props.dateFormat);
    }
  },

  onChangeDate: function onChangeDate(date) {
    this.props.value = date;
    this.hideDatePicker();
    this.props.onChange(date);
  },

  showDatePicker: function showDatePicker() {
    if (!this.props.disabled) this.setState({ show: true });
  },

  value: function value() {
    if (_date_utils2['default'].validFormats.indexOf(this.props.dateFormat) != -1) {
      return this.momentDate().format(this.props.dateFormat);
    } else {
      return "Invalid date format";
    }
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.containerClasses() },
      this.label(),
      _react2['default'].createElement('br', null),
      this.datePicker(),
      _react2['default'].createElement(
        'div',
        { className: 'relative rounded-2 overflow-hidden no-select',
          style: { zIndex: this.baseZIndex() } },
        _react2['default'].createElement('input', {
          className: this.fieldClasses(),
          disabled: this.props.disabled,
          onFocus: this.showDatePicker,
          onfocusout: this.hideDatePicker,
          readOnly: true,
          type: 'text',
          value: this.value() }),
        _react2['default'].createElement('span', {
          className: this.iconClasses(),
          onClick: this.showDatePicker,
          style: { zIndex: this.baseZIndex() + 2 } })
      ),
      _react2['default'].createElement('div', { className: 'clearfix' })
    );
  }
});
module.exports = exports['default'];