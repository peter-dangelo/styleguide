import React from 'react';
import ModalBackground from './modal-background';

export default React.createClass({

  displayName: "Modal",

  getInitialState() {
    return {
      isOpen: false
    }
  },


  componentWillUpdate() {
    console.log('componentWillUpdate');

  },

  componentDidUpdate() {
    console.log('componentDidUpdate');

  },

  componentWillMount() {
    console.log('componentWillMount');

  },


  componentDidMount() {
    console.log('componentDidMount');

  },

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');

  },

  componentWillUnmount(){
    console.log('componentWillUnmount');

  },

  removeModal() {
    // remove the component
    // remove the node
    var node = document.getElementById('react-modal');
    var parentNode = node.parentNode;
    parentNode.removeChild(node);
    // document.getElementById('react-modal');
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
      styles: this.props.styles,
      innerContent: this.props.children,
      removeModal: this.removeModal,
      contentColumnWidth: this.props.contentColumnWidth
    } ), document.getElementById(DomId));
  },

  render(){
    return <button onClick={this.open}>{this.props.prompt}</button>
  }

});