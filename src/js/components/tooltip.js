import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Tooltip",

  propTypes: {
    content: React.PropTypes.node.isRequired,
    extraClasses: React.PropTypes.string,
    position: React.PropTypes.string,
    width: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      extraClass: null,
      position: 'below',
      width: 80
    };
  },

  getInitialState() {
    return {
      isOpen: false
    }
  },

  classes() {
    let classes = ["react-tooltip", 'relative', this.positionClass()];
    if (!!this.props.extraClasses) classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  positionClass() {
    switch (this.props.position) {
      case 'above':
        return 'react-tooltip-above';
      default:
        return 'react-tooltip-below';
    }
  },

  style() {
    return {
      width: this.props.width,
      left: -(parseInt(this.props.width / 2))
    };
  },

  triangleClass() {
    switch (this.props.position) {
      case 'above':
        return 'triangle-down-10';
      default:
        return 'triangle-up-10';
    }
  },

  render() {
    return (
      <div className={this.classes()} style={this.style()}>
        <div className={'middle ' + this.triangleClass()}></div>
        <div className='react-tooltip-content'>{this.props.content}</div>
      </div>
    );
  }
});
