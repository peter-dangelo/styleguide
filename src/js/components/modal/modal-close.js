import React from 'react';
export default React.createClass({

  displayName: "ModalClose",

  handleClick(){
    this.props.removeModal();
  },

  render() {
    return <a className="absolute blue pointer top-0 right-0 mt2 mr2" onClick={this.handleClick}><span className="icon-delete" /></a>
  }

});