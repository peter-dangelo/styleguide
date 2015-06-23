import React from 'react';
import ModalClose from './modal-close';

export default React.createClass({

  displayName: "ModalContent",

  getDefaultProps() {
    return {
      showCloseButton: true
    };
  },

  styles(){
    return this.props.styles.modalContent
  },

  renderChildren() {
    return React.Children.map( this.props.innerContent, (child) => <div>{child}</div> )
  },

  handleClick(e) {
    // when we click on the this content component, we don't want the background's click handler to fire
    e.stopPropagation()
  },

  classes: [
    'modal-content',
    'style-guide-request',
    'mx-auto',
    'bg-white',
    'p4',
    'rounded-3',
    'relative'
  ],

  renderCloseButton() {
    // the close button is the top-right X
    if(this.props.showCloseButton) {
      return <ModalClose removeModal={this.props.removeModal} />
    }
  },

  render() {
    return <div className={this.classes.join(' ')} onClick={this.handleClick}>
        {this.renderChildren()}
        {this.renderCloseButton()}
      </div>
  }

});