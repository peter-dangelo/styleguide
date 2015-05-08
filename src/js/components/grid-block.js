import 'core-js/shim';
import React from 'react';

const D = React.DOM;
const Type = React.PropTypes;

export default React.createClass({
  displayName: "GridBlock",

  //propTypes: {
  //  colClass: Type.string.required
  //},

  colContent() {
    return this.props.colContent || this.props.colClass
  },

  render() {
    return D.div({
      className: `grid-block ${this.props.colClass}`
    }, D.p({
      className: "col-class",
    }, `.${this.colContent()}` ));
  }
});
