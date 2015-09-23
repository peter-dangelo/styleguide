import React from 'react';
import DatePicker from './date_picker';
import Moment from 'moment';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "ReactDateField",

  propTypes: {
    dateFormat: Type.oneOf(['MM/DD/YYYY','DD/MM/YYYY', 'YYYY/MM/DD','MMM D, YYYY']),
    disabled: Type.bool,
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    onChange: Type.func,
    value: Type.oneOfType([Type.string, Type.date])
  },

  momentDate() {
    if (Object.prototype.toString.call(this.props.value) === '[object Date]') {
      return Moment(this.props.value);
    } else {
      return Moment(this.props.value, this.props.dateFormat);
    }
  },

  fieldClasses() {
    var classes = [];
    classes.push('field-'+this.props.fieldColor);
    return classes.join(' ');
  },

  getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      label: 'Date',
      onChange : function() {},
      value : new Date(),
    }
  },

  getInitialState() {
    return {show:false};
  },

  iconClasses() {
    var classes = ['icon', 'icon-calendar', 'ml1'];
    this.props.disabled ? classes.push('grey-25') : classes.push('blue');
    return classes.join(' ');
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  showDatePicker() {
    this.setState({show:true});
  },

  hideDatePicker() {
    this.setState({show:false});
  },

  onChangeDate(date) {
    this.props.value = date;
    this.hideDatePicker();
    this.props.onChange(date);
  },

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string
  },

  render() {
    var style = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height:'100%',
      display: (this.state.show ? 'block' : 'none'),
      zIndex: '101'
    };

    return (
      <div className={"date-field date-field-react-container relative " + this.props.extraClasses}>
        <div style={style} onClick={this.hideDatePicker}></div>
        <div className={"date-field-react-wrapper no-select"}>
          {this.transferPropsTo(<DatePicker date={this.momentDate().toDate()} show={this.state.show} onChangeDate={this.onChangeDate} />)}
        </div>
        {this.label()}
        <br/>
        <input
          className="field-light relative"
          disabled={this.props.disabled}
          onFocus={this.showDatePicker}
          readOnly
          type="text"
          value={this.momentDate().format(this.props.dateFormat)}/>
        <span className={this.iconClasses()}></span>
      </div>
    );
  }
});
