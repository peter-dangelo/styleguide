import React from 'react';

let D = React.DOM;

export default React.createClass({
  displayName: "HomePage",

  render() {
    return D.h1({}, "Namely Styleguide FTW");
  }
});
