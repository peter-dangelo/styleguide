import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "NumberField",

  propTypes: {
    id: Type.string,
    label: Type.string,
  },

  getDefaultProps() {
    return {
      id: ''
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  render() {
    return  <div className="number-field">
        {this.label()}
        <input className="" id="" type="number"></input>
        <span className="icon icon-arrow-double blue"></span>
      </div>
  }
});
