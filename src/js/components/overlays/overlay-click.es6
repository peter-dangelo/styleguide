import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "OverlayClick",

  propTypes: {
    content: Type.node.isRequired,
    onClick: Type.func,
    onClose: Type.func,
    onOpen: Type.func
  },

  getDefaultProps() {
    return {
      onClick: function() {},
      onClose: function() {},
      onOpen: function() {}
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
    document.addEventListener('click', this.handleDocumentClick);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },

  content() {
    if (this.state.isOpen) {
      return this.props.content;
    }
  },

  hide() {
    this.props.onClose();
    this.setState({isOpen: false});
  },

  handleDocumentClick(e) {
    if (this.getDOMNode().contains(e.target)) {
      if (!this.state.isOpen) {
        this.show();
      } else {
        this.props.onClick();
        if (e.target.classList.contains('overlay-trigger')) this.hide();
      }
    } else {
      this.hide();
    }
  },

  show() {
    this.props.onOpen();
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
