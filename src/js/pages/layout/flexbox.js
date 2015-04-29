// The Flexbox Documentation for the layout page

import { createClass, DOM as D, PropTypes } from 'react';

export default createClass({
  displayName: "Flexbox",

  render() {
    return D.section({}, [
      D.h3({className: "mt3"}, ".flex"),
      D.p({}, "Example contains a parent container with a class of 'flex' and two child divs with no special classes"),
      D.div({
        className: "flex border p2"
      }, [
        D.div({className: "border p1 mr2"}, D.span({}, "A DIV of Content")),
        D.div({className: "border p1 mr2"}, D.span({}, "A DIV of Content")),
      ])
    ])
  }
});
