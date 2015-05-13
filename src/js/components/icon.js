import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Icon",

  propTypes: {
    name: Type.string.isRequired,
    extraClasses: Type.arrayOf(Type.string)
  },

  getDefaultProps() {
    return {
      extraClasses: []
    };
  },

  classes() {
    let classes = [`icon-${this.props.name}`];

    if (this.props.extraClasses) {
      classes = classes.concat(this.props.extraClasses);
    }

    return classes.join(' ');
  },

  render() {
    const name = this.props.name;

    return <i className={this.classes()} onClick={this.props.onClick} />;
  }
});
