import React from 'react';
import ModalBackground from './modal-background';

export default React.createClass({

  displayName: "Modal",

  getInitialState() {
    return {
      isOpen: false
    }
  },

  removeModal() {
    var node = document.getElementById('react-modal');
    var parentNode = node.parentNode;
    parentNode.removeChild(node);
  },

  open() {
    this.setState({isOpen: true})
    var DomId = "react-modal";
    var containerElement = document.createElement("div");
    containerElement.setAttribute("id",DomId);
    containerElement.className = containerElement.className + " ";
    document.body.appendChild(containerElement);

    // not sure about this... Is JSX usable here?
    React.render(ModalBackground( {
      showCloseButton: this.props.showCloseButton,
      zIndex: this.props.zIndex,
      innerContent: this.props.children,
      removeModal: this.removeModal,
      contentColumnWidth: this.props.contentColumnWidth
    } ), document.getElementById(DomId));
  },

  render(){
    return <button onClick={this.open}>{this.props.prompt}</button>
  }

});
