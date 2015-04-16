import React from 'react';

let D = React.DOM;

export default React.createClass({
  displayName: "HomePage",

  render() {
    return D.div({
      className: 'home-page'
    }, [
      D.h1({
        className: 'home-title'
      }, "Namely Styleguide FTW")
    ]);
  }
});
