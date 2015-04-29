import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Button",

  propTypes: {
   type: Type.oneOf([null, 'danger', 'secondary', 'disabled']),
   label: Type.string,
   size: Type.oneOf([null, 'sm'])
  },

  getDefaultProps: function() {
    return {
      type: null,
      size: null
    };
  },

  classes: function() {
    var classes = []

    if (this.props.type) {
      classes.push("button-" + this.props.type)
    }

    if (this.props.size) {
      classes.push("button-" + this.props.size)
    }

    return classes.join(' ')
  },

  render() {
    return <button className={ this.classes() }>{ this.props.label }</button>;
  }
});
