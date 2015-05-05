import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "SimpleSelect",

  propTypes: {
    label: Type.string,
    options: Type.object
  },

  getDefaultProps() {
    return {
    }
  },

  label() {
    if(this.props.label) {
      return <label className="px2 mb1">{this.props.label}</label>;
    }
  },

  render() {
    return  <div className="simple-select relative">
        {this.label()}
        <select id="" className="bc-grey-10">
          {this.props.options.map(function(option){
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
        <span className="icon icon-arrow-double absolute right blue mxn3"></span>
      </div>
  }
});
