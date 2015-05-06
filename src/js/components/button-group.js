import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "ButtonGroup",

  propTypes: {
   type: Type.oneOf(['actions']),
   children: Type.node.isRequired,
   extraClass: Type.string
  },

  createClass: function(value) {
    return "button-group-" + value;
  },

  classes: function() {
    var classes = ["button-group"];

    if (this.props.type) {
      classes.push(this.createClass(this.props.type));
    }

    if (this.props.extraClass) {
      classes.push(this.props.extraClass);
    }

    return classes.join(' ');
  },

  render() {
    return <div className={ this.classes() } >{ this.props.children }</div>;
  }
});
