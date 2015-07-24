import React from 'react';

export default React.createClass({
  displayName: "Styleguide",

  listComponentTitles: function () {
    let children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");
      return React.createElement("li", {className: "py1 blue"}, React.createElement("a", {
        href: `#${title}`
      }, child.props.title));
    });
  },

  listComponents: function () {
    let children = this.props.children;
    let self = this;

    children = (React.Children.count(children) == 1) ? [children] : children;
    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");

      return React.createElement("div", {
        className: "styleguide-components-component py3",
        id: title
      }, React.createElement("h2", {
        className: "styleguide-components-component-title"
      }, child.props.title), React.createElement("p", {
        className: "styleguide-components-component-description"
      }, child.props.description), React.createElement("div", {
        className: "styleguide-components-component-example"
      }, child.props.children), self.props.example ? React.createElement("div", {
        className: "styleguide-components-component-code"
      }, React.createElement("pre", null, React.createElement("code", {
        className: self.props.codeClassName ? self.props.codeClassName : "language-javascript"
      }, self.props.highlight ? self.props.highlight(child.props.example) : child.props.example))) : void 0
      );
    });
  },

  render: function () {
    return (React.createElement("div", {
      className: "styleguide flex tall"
    }, React.createElement("div", {
      className: "styleguide-sidebar col-2 py5 px3 br bw-1 bc-grey-15"
    }, [
      React.createElement("h5", {
        className: "styleguide-sidebar-title grey-15 py2"
      }, this.props.title),
      React.createElement("ul", {
        className: "styleguide-sidebar-list list-reset"
      }, this.listComponentTitles())
    ]), React.createElement("div", {
      id: "styleguide-components",
      className: "styleguide-components flex-auto overflow-scroll p4"
    }, this.listComponents())));
  }
});
