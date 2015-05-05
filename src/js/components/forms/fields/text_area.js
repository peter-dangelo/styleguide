import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextArea",

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
    return  <div className="textarea">
        {this.label()}
        <textarea className="" placeholder={this.props.placeholder}/>
      </div>
  }
});
