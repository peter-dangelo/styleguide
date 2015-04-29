import React from 'react';

import StyleguideClass from '../styleguide';
import GridBlockClass from '../components/grid-block';

const D = React.DOM;
const Styleguide = React.createFactory(StyleguideClass);
const GridBlock = React.createFactory(GridBlockClass);

export default React.createClass({
  displayName: "LayoutPage",

  render() {
    return Styleguide({
      title: "Layout System",
      codeClassName: "language-css"
    }, [
      D.div({
        className: "grid",
        title: "Grid",
        description: "The main grid class system for Namely"
      }, [
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
          GridBlock({ colClass: "col-1" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-2" }),
          GridBlock({ colClass: "col-2" }),
          GridBlock({ colClass: "col-2" }),
          GridBlock({ colClass: "col-2" }),
          GridBlock({ colClass: "col-2" }),
          GridBlock({ colClass: "col-2" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-3" }),
          GridBlock({ colClass: "col-3" }),
          GridBlock({ colClass: "col-3" }),
          GridBlock({ colClass: "col-3" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-4" }),
          GridBlock({ colClass: "col-4" }),
          GridBlock({ colClass: "col-4" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-5" }),
          GridBlock({ colClass: "col-7" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-6" }),
          GridBlock({ colClass: "col-6" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-7" }),
          GridBlock({ colClass: "col-5" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-8" }),
          GridBlock({ colClass: "col-4" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-9" }),
          GridBlock({ colClass: "col-3" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-10" }),
          GridBlock({ colClass: "col-2" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-11" }),
          GridBlock({ colClass: "col-1" }),
        ]),
        D.div({
          className: "row"
        }, [
          GridBlock({ colClass: "col-12" }),
        ]),
        D.h3({
          className: "mt5"
        }, "Example: Basic Layout", [
        ]),
        D.div({
          className: "row"
        }, 
          GridBlock({ colClass: "col-12", colContent: "col-12 (Header)"})
        ),
        D.div({className: "row" }, [
          GridBlock({ colClass: "col-3", colContent: "col-3 (Sidebar)" }),
          GridBlock({ colClass: "col-9", colContent: "col-9 (Content)" }),
        ])
      ]),
      D.div({
        title: "Flexbox",
        description: "The utility classes for using the flexbox layout system."
      }, [
        D.h3({className: "mt3"}, ".flex"),
        D.p({}, "Example contains a parent container with a class of 'flex' and two child divs with no special classes"),
        D.div({
          className: "flex border p2"
        }, [
          D.div({className: "border p1 mr2"}, D.span({}, "A DIV of Content")),
          D.div({className: "border p1 mr2"}, D.span({}, "A DIV of Content")),
        ])
      ])
    ]);
  }
});
