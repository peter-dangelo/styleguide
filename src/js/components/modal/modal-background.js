import React from 'react';
import ModalContent from './modal-content';

export default React.createClass({

  displayName: "ModalBackground",

  // temporary
  styles: {
    zIndex: 1000
  },

  handleClick() {
    this.props.removeModal()
  },

  render() {
    return <div key="modalBackground" style={this.styles} className="fade modal-background top-0 bottom-0 left-0 right-0 fixed flex flex-center" onClick={this.handleClick}>
        <ModalContent {...this.props}/>
      </div>

  }

});