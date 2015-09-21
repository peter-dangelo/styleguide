import React from 'react';
import DatePicker from './date_picker'

var DatePickerInput = React.createClass({

  getDefaultProps: function() {
    return(
    {
      date : new Date(),
      dateFormatter : function(date) {
        var output = '';
        output+=date.getMonth()+1+'/';
        output+=date.getDate()+'/';
        output+=date.getFullYear();
        return output;
      },
      onChangeDate : function() {}
    });
  },

  getInitialState: function() {
    return {show:false};
  },

  showDatePicker: function() {
    this.setState({show:true});
  },

  hideDatePicker: function() {
    this.setState({show:false});
  },

  onChangeDate: function(date) {
    this.props.date = date;
    this.setState({show:false});
    this.props.onChangeDate(date);
  },

  render: function() {
    var style = {
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      height:'100%',
      display: (this.state.show ? 'block' : 'none')
    };

    return (
      <div className="date-field-react-container">
        <div style={style} onClick={this.hideDatePicker}></div>
        <div className="date-field-react-wrapper bg-grey-95 rounded-3">
          {this.transferPropsTo(<DatePicker date={this.props.date} show={this.state.show} onChangeDate={this.onChangeDate} />)}
        </div>
        <input
          type="text"
          className="field-light"
          onFocus={this.showDatePicker}
          value={this.props.dateFormatter(this.props.date)}
          readOnly />
      </div>
    );
  }
});

module.exports = DatePickerInput;
