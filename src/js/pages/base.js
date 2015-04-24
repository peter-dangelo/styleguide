import React from 'react';
import Styleguide from '../styleguide';
import Colors from './colors';

let D = React.DOM;

export default React.createClass({
  displayName: "BasePage",

  render() {
    return React.createElement(Styleguide, {
      title: "Base Styles"
    }, [
      React.createElement("div", {
        title: "Paragraph",
        description: "The paragraph styles for Namely app",
        example: 'D.p({}, "Some sample text for this paragraph component")'
      }, React.createElement("p", {}, "Some sample text for this paragraph component")),
      React.createElement("div", {
        title: "Colors",
        description: "Namely's colors -- yeah this is ugly but it will be gridded out",
        example: 'D.p({}, "Some sample text for this paragraph component")'
      }, React.createElement(Colors))
    ]);
  }
});
