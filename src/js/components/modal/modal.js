import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Modal",

  propTypes: {
    zIndex: Type.number,
    contentColumns: Type.number,
    disableClickBackground: Type.bool,
    closeModal: Type.func,
    isOpen: Type.bool
  },

  getInitialState() {
    return {
      isOpen: this.props.isOpen || false
    }
  },

  getDefaultProps() {
    return {
      zIndex: 1000,
      contentColumns: 9
    }
  },

  clickBackground() {
    this.props.closeModal()
  },

  clickContent(e) {
    // keeps the content click from bubbling up to outside click
    e.stopPropagation()
  },

  modalContentClasses() {
    var classes = [
      'modal-content',
      'mx-auto',
      'bg-white',
      'p4',
      'rounded-3',
      'relative',
      'float-none'
    ];

    classes.push('col-'+this.props.contentColumns);

    return classes.join(' ');

  },

  render() {
    return <div ref="modal" style={{zIndex: this.props.zIndex}} className="anim-fade ease-out modal-background top-0 bottom-0 left-0 right-0 fixed flex flex-center" onClick={this.clickBackground}>
        <div className="container fill">
          <div onClick={this.clickContent} className={this.modalContentClasses()}>
            {this.props.children}
          </div>
        </div>
      </div>

  }

});
