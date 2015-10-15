import DatePicker from './date_picker';
import FieldError from '../../field-error';
import Moment from 'moment';
import React from 'react';

const Type = React.PropTypes;

// Note: The value of date.month() for 1/1/2015 is 0, not 1

let validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

export default React.createClass({

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

  getDefaultProps() {
    return {
      date : new Date(),
      disabled: false,
      errors: [],
      fieldColor: 'light',
      includeMaxMinBounds: true,
      label: 'Date',
      onChange: function() {}
    }
  },

  getInitialState() {
    return {
      date: this.momentDate(this.props.date),
      disabled: (this.props.disabled || !this.isFormatValid() || !this.isDateValid(this.props.date)),
      errors: this.initErrors(),
      show: false
    };
  },

  baseZIndex() {
    return this.state.show ? 300 : 1;
  },

  boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  },

  boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  },

  changeDate(date) {
    this.setState({date: date});
    this.hideDatePicker();
    this.props.onChange(date);
  },

  containerClasses() {
    var classes = ['date-field', 'relative'];
    if (this.state.disabled) classes.push('disabled');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  datePicker() {
    if (this.state.show) {
      return (
        <div>
          <div className='modal-clear-bg'
               onClick={this.hideDatePicker}
               style={{zIndex: this.baseZIndex()-2}}>
          </div>
          <DatePicker date={this.state.date}
                      maxDate={this.boundedMaxDate()}
                      minDate={this.boundedMinDate()}
                      onChangeDate={this.changeDate}
                      show={this.state.show}
                      zIndex={this.baseZIndex()-1} />
        </div>
      );
    }
  },

  fieldError() {
    if (this.state.errors.length > 0) {
      return <FieldError message={this.state.errors.join('; ')} />;
    }
  },

  hideDatePicker() {
    this.resetErrors();
    this.setState({show: false});
  },

  iconClasses() {
    var classes = ['icon', 'icon-calendar', 'ml1', 'absolute'];
    this.state.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  initErrors() {
    var errors = this.props.errors || [];
    if (!this.isDateValid(this.props.date)) errors.push('Error parsing date');
    if (!this.isFormatValid()) errors.push('Invalid date format');
    return errors;
  },

  inputClasses() {
    var classes = ['relative', 'fit', 'pr5'];
    classes.push( 'field-' + this.props.fieldColor );
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  },

  isDateValid(date=this.state.date) {
    return this.momentDate(date).isValid();
  },

  isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  },

  label() {
    if (this.props.label) {
      return <label onClick={this.showDatePicker} className="px2 mb1">
               {this.props.label}
             </label>;
    }
  },

  momentDate(date) {
    if (!!date) {
      switch (date.constructor.name) {
        case "Date":
        case "Number":
          return Moment(date);
        case "Moment":
          return date;
        case "String":
          return Moment(date, this.props.dateFormat);
        default:
          return null;
      }
    } else {
      return null;
    }
  },

  resetErrors() {
    var errors = [];
    if (!this.isDateValid()) errors.push('Error parsing date');
    this.setState({errors: errors});
  },

  showDatePicker() {
    if (!this.state.disabled) this.setState({show: true});
  },

  value() {
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

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.fieldError()}
        <br />
        {this.datePicker()}
        <div className='relative rounded-2 overflow-hidden no-select'
             style={{zIndex: this.baseZIndex()}}>
          <input className={this.inputClasses()}
                 disabled={this.state.disabled}
                 onFocus={this.showDatePicker}
                 readOnly
                 type="text"
                 value={this.value()} />
          <span className={this.iconClasses()}
                onClick={this.showDatePicker}
                style={{zIndex: this.baseZIndex()+2}}></span>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});
