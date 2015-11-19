import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "OverlayWrapper",

  propTypes: {
    handleClose: Type.func,
    overlayContent: Type.node.isRequired
  },

  getDefaultProps() {
    return {
      handleClose: function() {}
    };
  },

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  },

  onDocumentClick(e) {
    if (!this.getDOMNode().contains(e.target)) {
      this.props.handleClose();
    }
  },

  render() {
    return (
      <div>
        {this.props.overlayContent}
      </div>
    );
  }
});
