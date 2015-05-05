import React from 'react';

const D = React.DOM;
const Type = React.PropTypes;

export default React.createClass({
  displayName: "Icon",

  render() {
    return <i className={'icon-' + this.props.name} />;
  }
});
