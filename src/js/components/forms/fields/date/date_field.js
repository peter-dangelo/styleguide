import React from 'react';
import DatePicker from './date_picker';
import Moment from 'moment';

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

  fieldClasses() {
    var classes = ['relative', 'fit', 'pr5'];
    classes.push( 'field-' + this.props.fieldColor );
    if (!(this.isFormatValid() && this.isDateValid())) classes.push('bc-orange');
    return classes.join(' ');
  },

  hideDatePicker() {
    this.setState({show: false});
  },

  iconClasses() {
    var classes = ['icon', 'icon-calendar', 'ml1', 'absolute'];
    this.state.disabled ? classes.push('grey-25') : classes.push('blue-70');
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

  changeDate(date) {
    this.setState({date: date});
    this.hideDatePicker();
    this.props.onChange(date);
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
        <br />
        {this.datePicker()}
        <div className='relative rounded-2 overflow-hidden no-select'
             style={{zIndex: this.baseZIndex()}}>
          <input className={this.fieldClasses()}
                 disabled={this.state.disabled}
                 onFocus={this.showDatePicker}
                 onfocusout={this.hideDatePicker}
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
