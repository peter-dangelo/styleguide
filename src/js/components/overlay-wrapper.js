import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "OverlayWrapper",

  propTypes: {
    extraClasses: Type.array,
    overlayContent: Type.node.isRequired,
    trigger: Type.oneOfType([
      Type.oneOf(['click', 'hover', 'focus']),
      Type.arrayOf(Type.oneOf(['click', 'hover', 'focus']))
    ]),
    triggerContent: Type.node.isRequired
  },

  getDefaultProps() {
    return {
      extraClasses: null,
      trigger: 'click',
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
        {this.props.triggerContent()}
        {this.props.overlayContent()}
      </div>
    );
  }
});
