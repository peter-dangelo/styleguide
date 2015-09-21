import React from 'react';
import DatePicker from './date_picker'

const Type = React.PropTypes;

export default React.createClass({
  displayName: "ReactDateField",

  fieldClasses() {
    var classes = [];
    classes.push('field-'+this.props.fieldColor);
    return classes.join(' ');
  },

  getDefaultProps() {
    return {
      date : new Date(),
      dateFormatter : function(date) {
        var output = '';
        output+=date.getMonth()+1+'/';
        output+=date.getDate()+'/';
        output+=date.getFullYear();
        return output;
      },
      disabled: false,
      fieldColor: 'light',
      onChangeDate : function() {}
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
    this.props.date = date;
    this.setState({show:false});
    this.props.onChangeDate(date);
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
      'z-index': '101'
    };

    return (
      <div className="date-field date-field-react-container relative">
        <div style={style} onClick={this.hideDatePicker}></div>
        <div className={"date-field-react-wrapper bg-grey-90 rounded-3 p3"}>
          {this.transferPropsTo(<DatePicker date={this.props.date} show={this.state.show} onChangeDate={this.onChangeDate} />)}
        </div>
        {this.label()}
        <br/>
        <input
          className="field-light relative"
          disabled={this.props.disabled}
          onFocus={this.showDatePicker}
          readOnly
          type="text"
          value={this.props.dateFormatter(this.props.date)}/>
        <span className={this.iconClasses()}></span>
      </div>
    );
  }
});
