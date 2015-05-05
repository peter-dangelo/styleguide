import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextField",

  propTypes: {
    id: Type.string,
    label: Type.string,
    placeholder: Type.string
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
    return  <div className="text-field">
        {this.label()}
        <input className="" id="" type="text" placeholder={this.props.placeholder}></input>
      </div>
  }
});
