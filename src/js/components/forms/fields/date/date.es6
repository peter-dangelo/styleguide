import _ from 'underscore';
import React from 'react';
import DatePicker from './date-picker';
import { fieldProps, FieldBase } from '../base.es6';
import Moment from 'moment';
import Tooltip from '../../../overlays/tooltip';
import Overlay from '../../../overlays/overlay-click';

const Type = React.PropTypes;

// Note: The value of date.month() for 1/1/2015 is 0, not 1

let validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

class DateField extends FieldBase {

  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.isFormatValid()) {
      this.setState({
        errors: ['Invalid date format']
      });
    } else {
      if (!this.state.value && !this.isValid()) {
        this.setState({
          errors: this.state.errors.concat('Invalid date')
        });
      }
    }
  }

  boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  }

  boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  }

  // Accepts only moments
  handleChange(date) {
    let errors = [];
    if (!this.isValid()) errors.push('Invalid date');
    this.setState({
      errors: errors,
      value: date
    });
    this.props.onChange();
  }

  datePicker() {
    return (
      <DatePicker date={this.state.value || Moment()}
                  maxDate={this.boundedMaxDate()}
                  minDate={this.boundedMinDate()}
                  onChangeDate={this.changeDate} />
    );
  }

  disabled() {
    return this.props.disabled || !this.isFormatValid();
  }

  iconStyle() {
    return {
      right: '8px',
      top: '6px',
      fontSize: '15px'
    };
  }

  isValid() {
    if (this.state && this.state.value) {
      return this.state.value.isValid();
    } else if (this.props.initialValue) {
      return this.momentDate(this.props.initialValue).isValid();
    } else {
      return true;
    }
  }

  isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  }

  triggerContent() {
    return (
      <div className='relative rounded-2 overflow-hidden no-select' >
        <input className={this.inputClasses()}
               disabled={this.disabled()}
               name={this.props.name}
               onFocus={this.showDatePicker}
               readOnly
               type="text"
               placeholder={this.props.placeholder}
               value={this.value()} />
        <span className='icon-calendar ml1 absolute'
              onClick={this.showDatePicker}
              style={this.iconStyle()}></span>
      </div>
    );
  }

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
  }

  tooltip() {
    return (
      <Tooltip content={this.datePicker()}
               position='top-right'
               right='-24px'
               top='37px' />
    );
  }

  value() {
    if (this.state.value) return this.state.value.format(this.props.dateFormat);
  }

  contents() {
    if (!this.disabled()) {
      return (
        <Overlay content={this.tooltip()}>
          {this.triggerContent()}
        </Overlay>
      );
    } else {
      return this.triggerContent();
    }
  }
};

DateField.displayName = "DateField";

DateField.propTypes = _.extend({
  dateFormat: Type.oneOf(validDateFormats).isRequired,
  includeMaxMinBounds: Type.bool,
  maxDate: Type.oneOfType([Type.object, Type.string, Type.number]),
  minDate: Type.oneOfType([Type.object, Type.string, Type.number])
}, fieldProps);

export default DateField;
