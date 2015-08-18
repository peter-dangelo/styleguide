import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "AccordionItem",

  propTypes: {
    isOpen: Type.bool,
    title: Type.node.isRequired,
    isLast: Type.bool
  },

  getDefaultProps() {
    return {
      isOpen: false
    };
  },

  getInitialState() {
    return {
      isOpen: this.props.isOpen
    }
  },

  // this sets the state when the expand all / collapse all in the parent passes isOpen prop
  componentWillReceiveProps(nextProps) {
    this.setState({isOpen: nextProps.isOpen})
  },

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  },

  iconClasses() {
    var classes = [
      'mr1'
    ];
    this.state.isOpen ? classes.push('icon-collapse','blue') : classes.push('icon-expand','blue');
    return classes.join(' ');
  },

  headerClasses() {
    var classes = [
      'accordion-item-head',
      'pointer',
      'flex',
      'flex-center',
      'py2'
    ];

    return classes.join(' ');

  },

  contentClasses() {
    var classes = [
      'accordion-item-content'
    ]
    this.state.isOpen ? classes.push('open') : classes.push('close overflow-hidden');
    return classes.join(' ');
  },

  containerClasses() {
    var classes = [
      'bt',
      'bw-1',
      'bc-blue-baby',
      'px2'
    ];

    if(this.props.isLast) {
      classes.push('bb');
    }

    return classes.join(' ');

  },

  render() {
    return (
      <div className={this.containerClasses()}>
        <div className={this.headerClasses()} onClick={this.handleClick}>
          <span className={this.iconClasses()}/>
          {this.props.title}
        </div>
        <div className={this.contentClasses()}>{this.props.children}</div>
      </div>
    );
  }

});
