import React from 'react';
import ModalBackground from './modal-background';

export default React.createClass({

  displayName: "Modal",

  getInitialState() {
    return {
      isOpen: this.props.isOpen || false
    }
  },



  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.isOpen == true && nextState.isOpen == false) {
      this.close();
    }
    if(this.state.isOpen == false && nextState.isOpen == true) {
      this.open();
    }
  },

  componentWillMount() {
    if(this.state.isOpen == true) {
      this.open();
    }
  },

  handleClick() {
    this.setState({isOpen: true})
  },

  removeModal() {
    this.setState({isOpen: false});
  },

  open() {
    var DomId = "react-modal";
    var containerElement = document.createElement("div");
    containerElement.setAttribute("id",DomId);
    containerElement.className = containerElement.className + " ";
    document.body.appendChild(containerElement);

    // not sure about this... Is JSX usable here?
    React.render(ModalBackground( {
      zIndex: this.props.zIndex,
      innerContent: this.props.children,
      removeModal: this.removeModal,
      contentColumnWidth: this.props.contentColumnWidth
    } ), document.getElementById(DomId));
  },

  close() {
    var node = document.getElementById('react-modal');
    var parentNode = node.parentNode;
    parentNode.removeChild(node);
  },

  render(){
    return <button onClick={this.handleClick}>{this.props.prompt}</button>
  }

});
