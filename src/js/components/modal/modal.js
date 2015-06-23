import React from 'react';
import ModalBackground from './modal-background';

export default React.createClass({

  displayName: "Modal",

  getInitialState() {
    return {
      isOpen: false
    }
  },

  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate');
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
    React.unmountComponentAtNode(document.getElementById('react-modal'));
    // remove the node
    document.getElementById('react-modal').remove();
  },

  open() {
    this.setState({isOpen: true})
    var DomId = "react-modal";
    var containerElement = document.createElement("div");
    containerElement.setAttribute("id",DomId);
    containerElement.className = containerElement.className + " ";
    document.body.appendChild(containerElement);
    React.render(ModalBackground( {
      showCloseButton: this.props.showCloseButton,
      styles: this.props.styles,
      innerContent: this.props.children,
      removeModal: this.removeModal
    } ), document.getElementById(DomId));
  },

  render(){
    return <button onClick={this.open}>{this.props.prompt}</button>
  }

});