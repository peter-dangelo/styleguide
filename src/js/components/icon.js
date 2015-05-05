import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Icon",

  render() {
    return <i className={'icon-' + this.props.name} />;
  }
});
