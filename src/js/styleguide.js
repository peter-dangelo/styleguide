import React from 'react';

export default React.createClass({
  displayName: "Styleguide",

  listComponentTitles: function () {
    let children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");
      return React.createElement("li", null, React.createElement("a", {
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
        className: "Styleguide-components-component",
        id: title
      }, React.createElement("h2", {
        className: "Styleguide-components-component-title"
      }, child.props.title), React.createElement("p", {
        className: "Styleguide-components-component-description"
      }, child.props.description), React.createElement("div", {
        className: "Styleguide-components-component-example"
      }, child.props.children), self.props.example ? React.createElement("div", {
        className: "Styleguide-components-component-code"
      }, React.createElement("pre", null, React.createElement("code", {
        className: self.props.codeClassName ? self.props.codeClassName : "language-javascript"
      }, self.props.highlight ? self.props.highlight(child.props.example) : child.props.example))) : void 0
      );
    });
  },

  componentDidMount: function () {},

  render: function () {
    return (React.createElement("div", {
      className: "Styleguide flex tall"
    }, React.createElement("div", {
      className: "Styleguide-sidebar col-2 last tall"
    }, [
      React.createElement("h5", {
        className: "Styleguide-sidebar-title"
      }, this.props.title),
      React.createElement("ul", {
        className: "Styleguide-sidebar-list"
      }, this.listComponentTitles())
    ]), React.createElement("div", {
      className: "Styleguide-components flex-fill overflow-scroll"
    }, this.listComponents())));
  }
});

