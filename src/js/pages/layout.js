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
        D.h2(null, "Example: Basic Layout", [
          D.div({
            className: "row"
          }, GridBlock({ colClass: "col-12", colContent: "Header"})),
          D.div({className: "row" }, [
            GridBlock({ colClass: "col-3", colContent: "Sidebar" }),
            GridBlock({ colClass: "col-9", colContent: "Content" }),
          ])
        ])
      ])
    ]);
  }
});
