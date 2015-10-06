import React from 'react';
import _ from 'underscore';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "SimpleSelect",

  propTypes: {
    includeBlank: Type.oneOfType([Type.bool, Type.string]),
    options: Type.oneOfType([Type.object, Type.array]).isRequired,
    placeholder: Type.string,
    value: Type.oneOfType([Type.string, Type.number])
  },

  componentWillMount() {
    this.setState({value: this.props.value || null});
  },

  getInitialState() {
    return {
      show_options: false
    }
  },

  onClickOption(option) {
    this.setState({
      value: option,
      show_options: false
    });
  },

  onClickOptionEmpty() {
    this.setState({
      value: null,
      show_options: false}
    );
  },

  onClickValue() {
    if(!this.props.disabled) {
      this.setState({show_options: !this.state.show_options});
    }
  },

  renderValue() {
    let value = this.props.options[this.state.value] || this.props.placeholder;
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
      'relative',
      this.props.disabled ? 'grey-225' : 'blue-70',
      this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down'
    ];
    let arrowStyle = {
      top: 1
    };

    return (
      <div className={valueClasses.join(' ')} onClick={this.onClickValue}>
        <div>{value}</div>
        <div className={arrowClasses.join(' ')} style={arrowStyle} />
      </div>
    );
  },

  renderOptions() {
    let optionsContainerClasses = [
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
    let optionClasses = [
      'option',
      'pointer',
      'px2',
      'py1'
    ];
    let emptyOption = (
      <div className={optionClasses.concat('grey-50').join(' ')} onClick={this.onClickOptionEmpty}>
        {typeof this.props.includeBlank == "string" ? this.props.includeBlank : "--"}
      </div>
    );
    let options = Object.keys(this.props.options).map( (key, index) => {
      return (
        <div key={index} className={optionClasses.join(' ')} onClick={this.onClickOption.bind(this, key)}>
          {this.props.options[key]}
        </div>
      );
    });
    return (
      <div className={optionsContainerClasses.join(' ')}>
        {this.props.includeBlank ? emptyOption : false}
        {options}
      </div>
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
