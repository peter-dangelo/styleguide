import React from 'react';

const Type = React.PropTypes;

const caretPositions = [
  "top-left", "top-center", "top-right",
  "right-top", "right-center", "right-bottom",
  "bottom-right", "bottom-center", "bottom-left",
  "left-bottom", "left-center", "left-top"
];

export default React.createClass({

  displayName: "Tooltip",

  propTypes: {
    baseZIndex: Type.number,
    content: Type.node.isRequired,
    extraClasses: Type.array,
    handleClose: Type.func,
    height: Type.oneOf(['auto', Type.number]),
    caretPosition: Type.oneOf(caretPositions),
    width: Type.oneOf(['auto', Type.number])
  },

  getDefaultProps() {
    return {
      baseZIndex: 300,
      bottom: null,
      caretPosition: 'top-right',
      handleClose: function() {},
      height: 'auto',
      left: null,
      right: null,
      top: null,
      width: 'auto'
    };
  },

  getInitialState() {
    return {
      height: this.props.height || null,
      width: this.props.width || null
    };
  },

  classes() {
    let classes = ['tooltip', 'absolute', 'rounded-3', 'p2', 'bg-blue-95'];
    classes.push(this.props.caretPosition);
    if (!!this.props.extraClasses) classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  style() {
    return {
      bottom: this.props.bottom,
      height: this.props.height,
      left: this.props.left,
      right: this.props.right,
      top: this.props.top,
      width: this.props.width,
      zIndex: this.props.baseZIndex
    };
  },

  triangleClass() {
    switch (this.props.caretPosition) {
      case 'top-center':
      case 'top-left':
      case 'top-right':
        return 'triangle-top';
      case 'right-center':
      case 'right-top':
      case 'right-bottom':
        return 'triangle-right';
      case 'bottom-center':
      case 'bottom-left':
      case 'bottom-right':
        return 'triangle-bottom';
      case 'left-bottom':
      case 'left-center':
      case 'left-top':
        return 'triangle-left';
    }
  },

  render() {
    return (
      <div className={this.classes()} style={this.style()}>
        <div className={this.triangleClass() + ' absolute bc-blue-95 blue-95'}></div>
        {this.props.content}
        <div className="clearfix"></div>
      </div>
    );
  }
});
