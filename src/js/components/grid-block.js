import React from 'react';

const D = React.DOM;
const Type = React.PropTypes;

export default React.createClass({
  displayName: "GridBlock",

  //propTypes: {
  //  colClass: Type.string.required
  //},

  render() {
    return D.div({
      className: `grid-block ${this.props.colClass}`
    }, D.p({
      className: "col-class",
    }, `.${this.props.colClass}` ));
  }
});
