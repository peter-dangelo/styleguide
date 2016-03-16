import React from 'react';

const Type = React.PropTypes;

/*
  <Option
    disabled={bool}
    extraClasses={array}
    isFocused={bool}
    onFocus={func}
    onSelect={func}
    selected={bool}
    value={bool | number | string}
  >
*/

class Option extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.classes = this.classes.bind(this);
  }

  classes() {
    const {
      extraClasses
    } = this.props;
    let classes = ['simple-select-option', 'nowrap', 'option', 'pointer', 'py1', 'px3'];

    classes = classes.concat(extraClasses || []);
    return classes.join(' ');
  }

  handleClick(e) {
    const {
      onSelect,
      value
    } = this.props;

    onSelect(value);
  }

  handleFocus(e) {
    const {
      isFocused,
      onFocus,
      value
    } = this.props;

    if (!isFocused) {
      onFocus(value);
    }
  }

  render() {
    const {
      disabled
    } = this.props;

    return (
      <div className={this.classes()}
        onClick={disabled ? null : this.handleClick}
        onMouseEnter={disabled ? null : this.handleFocus}
        onMouseMove={disabled ? null : this.handleFocus}
      >
        {this.props.children}
      </div>
    );
  }
};

export default Option;
