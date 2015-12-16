import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "OverlayClick",

  propTypes: {
    handleClick: Type.func,
    handleClose: Type.func,
    handleOpen: Type.func,
    content: Type.node.isRequired
  },

  getDefaultProps() {
    return {
      handleClick: function() {},
      handleClose: function() {},
      handleOpen: function() {}
    };
  },

  getInitialState() {
    return { isOpen: false };
  },

  classes() {
    let classes = ['relative'];
    return classes.join(' ');
  },

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  },

  content() {
    if (this.state.isOpen) {
      return this.props.content;
    }
  },

  hide() {
    this.props.handleClose();
    this.setState({isOpen: false});
  },

  onDocumentClick(e) {
    if (this.getDOMNode().contains(e.target)) {
      if (!this.state.isOpen) {
        this.show();
      } else {
        this.props.handleClick();
        if (e.target.classList.contains('overlay-trigger')) this.hide();
      }
    } else {
      this.hide();
    }
  },

  show() {
    this.props.handleOpen();
    this.setState({isOpen: true});
  },

  render() {
    return (
      <div className={this.classes()} >
        {this.props.children}
        {this.content()}
      </div>
    );
  }
});
