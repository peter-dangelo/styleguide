import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "TablesPage",

  render() {
    return React.createElement(Styleguide, {
      title: "Tables + List Styles"
    }, React.createElement("div", {
      title: "Paragraph",
      description: "The paragraph styles for Namely app",
      example: 'D.p({}, "Some sample text for this paragraph component")'
    }, React.createElement("p", {}, "Some sample text for this paragraph component"))
    );
  }
});


