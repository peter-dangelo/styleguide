import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "DateField",

  propTypes: {
    id: Type.string,
    label: Type.string,
  },

  getDefaultProps() {
    return {
      id: 'foo'
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  render() {
    return  <div className="date-field">
        {this.label()}
        <input id="" type="text"></input>
        <span className="icon-calendar blue ml2"></span>
      </div>
  }
});
