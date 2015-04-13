import React from 'react';

let D = React.DOM;
let Type = React.PropTypes;

let App = React.createClass({
  displayName: 'App',

  render() {
    return D.h1({}, 'Hello World from Namely Styleguide');
  }
});

React.render(App(), document.getElementById('app'));
