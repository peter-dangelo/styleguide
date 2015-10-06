import React from 'react';
import _ from 'underscore';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "SimpleSelect",

  componentWillMount() {
    this.setState({value: this.props.value || null});
  },

  getInitialState() {
    return {
      show_options: false
    }
  },

  // getDefaultProps() {
  // },

  onClickOption(option, e) {
    e.preventDefault();
    this.setState({
      value: option.value,
      show_options: false
    });
  },

  onClickValue() {
    if(!this.props.disabled) {
      this.setState({show_options: !this.state.show_options});
    }
  },

  renderValue() {
    let selectedOption = _.find(this.props.options, (option) => option.value == this.state.value );
    let valueClasses = [
      'b',
      'bc-grey-25',
      'bw-1',
      'flex',
      'flex-justify',
      'px2',
      'py1',
      this.state.show_options ? 'rounded-top-2' : 'rounded-2',
      this.props.disabled ? 'grey-25' : 'pointer'
    ];
    let arrowClasses = [
      'h6',
      this.props.disabled ? 'grey-225' : 'blue-70',
      this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down'
    ];

    return (
      <div className={valueClasses.join(' ')} onClick={this.onClickValue}>
        <span>{selectedOption ? selectedOption.label : this.props.promptText}</span>
        <span className={arrowClasses.join(' ')} />
      </div>
    );
  },

  renderOptions() {
    let classes = [
      'absolute',
      'bc-grey-25',
      'bg-white',
      'bb',
      'bl',
      'br',
      'bw-1',
      'left-0',
      'right-0',
      'rounded-bottom-2'
    ];
    let options = this.props.options.map( (option) => {
      return (
        <div className="option pointer px3 py1" onClick={this.onClickOption.bind(this, option)}>
          {option.label}
        </div>
      );
    });
    return (
      <div className={classes.join(' ')}>{options}</div>
    );
  },

  render() {

    let value = this.renderValue();
    let options = this.renderOptions();

    return (
      <div className="simple-select relative">
        <input type="hidden" name={this.props.name} value={this.state.value} disabled={this.props.disabled} />
        {value}
        {this.state.show_options ? options : false}
      </div>
    );
  }
});
