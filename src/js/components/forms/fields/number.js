import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "NumberField",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    inactive: Type.bool,
    label: Type.string,
    readOnly: Type.bool,
    units: Type.string
  },

  getDefaultProps() {
    return {
      readOnly: false,
      inactive: false
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  units(){
    if(this.props.units) {
      return <span className="units">{this.props.units}</span>
    }
  },

  classes() {
    var classes = ['number-field'];
    if(this.props.inactive) {
      classes.push('inactive');
    }
    classes.push(this.props.extraClasses)
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <br/>
        <input
          type="number"
          readOnly={this.props.readOnly || this.props.inactive}
        ></input>
        <span className="icon icon-arrow-double blue"></span>
        {this.units()}
      </div>
  }
});
