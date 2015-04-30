// The Flexbox Documentation for the layout page

import { createClass, DOM as D, PropTypes } from 'react';

export default createClass({
  displayName: "Flexbox",

  render() {
    return D.section({}, [
      D.article({className: "mt3"}, [
        D.h3(null, ".flex"),
        D.p({}, "Example contains a parent container with a class of 'flex' and two child divs with no special classes"),
        D.div({
          className: "flex b bw-1 p2"
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3"}, [
        D.h3(null, ".flex-wrap"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-wrap' and twelve child divs with no special classes"),
        D.div({
          className: "flex flex-wrap b bw-1 p2"
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-column"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-column' and three child divs with no special classes"),
        D.div({
          className: "flex flex-column b bw-1 p2"
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.h2(null, "Alignment"),
      D.p(null, "Use these utilities to control vertical alignment of child elements."),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-center"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-center' and two child divs with no special classes"),
        D.div({
          className: "flex flex-center b bw-1 p2",
          style: {
            height: "5em"
          }
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-stretch"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-stretch' and two child divs with no special classes"),
        D.div({
          className: "flex flex-stretch b bw-1 p2",
          style: {
            height: "5em"
          }
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-baseline"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-baseline' and two child divs with no special classes"),
        D.div({
          className: "flex flex-baseline b bw-1 p2",
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-start"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-start' and two child divs with no special classes"),
        D.div({
          className: "flex flex-start b bw-1 p2",
          style: {
            height: "5em"
          }
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-end"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-end' and two child divs with no special classes"),
        D.div({
          className: "flex flex-end b bw-1 p2",
          style: {
            height: "5em"
          }
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-justify"),
        D.p({}, "Example contains a parent container with classes 'flex' & 'flex-justify' and three child divs with no special classes"),
        D.div({
          className: "flex flex-justify b bw-1 p2",
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.h2(null, "Child elements"),
      D.p(null, "To control the size and behavior of child elements, use these utilities."),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-auto"),
        D.p({}, "Example contains a parent container with a class of 'flex' with two child divs with no special classes and one child with a class of 'flex-auto'"),
        D.div({
          className: "flex b bw-1 p2",
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "flex-auto b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-grow"),
        D.p({}, "Example contains a parent container with a class of 'flex' with two child divs with no special classes and one child with a class of 'flex-grow'"),
        D.div({
          className: "flex b bw-1 p2",
        }, [
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "flex-grow b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
      D.article({className: "mt3 mb4"}, [
        D.h3(null, ".flex-none"),
        D.p({}, "Example contains a parent container with a class of 'flex' with two child divs with a class of 'flex-auto' and one child with a class of 'flex-none'"),
        D.div({
          className: "flex b bw-1 p2",
        }, [
          D.div({className: "flex-auto b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "flex-none b bw-1 p1"}, D.span({}, "A DIV of Content")),
          D.div({className: "flex-auto b bw-1 p1"}, D.span({}, "A DIV of Content")),
        ])
      ]),
    ])
  }
});
