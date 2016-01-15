import { PropTypes } from 'react';
import DatePicker from './date-picker';
import FieldBase from '../base.es6';
import Moment from 'moment';
import Tooltip from '../../../overlays/tooltip';
import Overlay from '../../../overlays/overlay-click';

// Note: The value of date.month() for 1/1/2015 is 0, not 1

let validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

class DateField {

  className: 'date-field',

  displayName: "DateField",

  // The rest of the child components all use Moment objects for dates.
  propTypes: {
    dateFormat: PropTypes.oneOf(validDateFormats).isRequired,
    includeMaxMinBounds: PropTypes.bool,
    maxDate: PropTypes.oneOfType(PropTypes.object, PropTypes.string, PropTypes.number]),
    minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  },

  getInitialState() {
    return {
      errors: this.props.errors || [],
      value: this.momentDate(this.props.initialValue)
    };
  },

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

  // Accepts only moments
  handleChange(date) {
    let errors = [];
    if (!this.isValid()) errors.push('Invalid date');
    this.setState({
      errors: errors,
      value: date
    });
    this.props.onChange(date);
  },

  datePicker() {
    return (
      <DatePicker date={this.state.value || Moment()}
                  maxDate={this._boundedMaxDate()}
                  minDate={this._boundedMinDate()}
                  onChangeDate={this.changeDate} />
    );
  },

  disabled() {
    return this.props.disabled || !this.isFormatValid();
  },

  iconClasses() {
    let classes = ['icon-calendar', 'ml1', 'absolute'];
    this.disabled() ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  iconStyle() {
    return {
      right: '8px',
      top: '6px',
      fontSize: '15px'
    };
  },

  isValid() {
    if (this.state && this.state.value) {
      return this.state.value.isValid();
    } else if (this.props.initialValue) {
      return this.momentDate(this.props.initialValue).isValid();
    } else {
      return true;
    }
  },

  isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  },

  overlay() {
    if (!this.disabled()) {
      return (
        <Overlay content={this.tooltip()}>
          {this.triggerContent()}
        </Overlay>
      );
    } else {
      return this.triggerContent();
    }
  },

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
        <span className={this.iconClasses()}
              onClick={this.showDatePicker}
              style={this.iconStyle()}></span>
      </div>
    );
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

  tooltip() {
    return (
      <Tooltip content={this.datePicker()}
               position='top-right'
               right='-24px'
               top='37px' />
    );
  },

  value() {
    if (this.state.value) return this.state.value.format(this.props.dateFormat);
  },

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.overlay()}
        <div className="clearfix"></div>
        <FieldErrors errors={this.state.errors} />
      </div>
    );
  }
});

export default FieldBase(DateField);
