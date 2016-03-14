import React from 'react';
import Overlay from '../../../overlays/overlay-click';
import fuzzysearch from 'fuzzysearch';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "SimpleSelect",

  propTypes: {
    canSearch: Type.bool,
    disabled: Type.bool,
    hasError: Type.bool,
    includeBlank: Type.bool,
    name: Type.string,
    onChange: Type.func,
    options: Type.oneOfType([Type.object, Type.array]).isRequired,
    placeholder: Type.string,
    value: Type.oneOfType([Type.string, Type.number])
  },

  getDefaultProps() {
    return {
      canSeach: false,
      hasError: false,
      onChange: function() {},
      options: []
    };
  },

  getInitialState() {
    return {
      searchValue: '',
      show_options: false,
      value: this.props.value || null
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value != prevState.value) {
      this.props.onChange(this.state.value);
    }

    if (this.props.value != prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  },

  arrowClasses() {
    let classes = ['h6', 'ml1', 'relative'];
    classes.push(this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down');
    return classes.join(' ');
  },

  onClickOption(option) {
    this.setState({
      value: option,
      show_options: false
    });
    this.refs.container.hide();
  },

  onClickOptionEmpty() {
    this.setState({
      value: null,
      show_options: false
    });
    this.refs.container.hide();
  },

  onClickValue() {
    if (!this.props.disabled) {
      this.setState({show_options: !this.state.show_options});
      this.refs.container.hide();
    }
  },

  optionsArray() {
    let options = this.props.options;
    return (typeof options === 'object' && Array.isArray(options)) ? options : false;
  },

  optionsClasses() {
    let classes = ['absolute', 'bb', 'bl', 'br', 'bw-1', 'left-0', 'right-0', 'rounded-bottom-2'];
    classes.push(this.state.show_options ? 'bc-grey-50' : 'bc-grey-25');
    return classes.join(' ');
  },

  optionsObject() {
    let options = this.props.options;
    return (typeof options === 'object' && !Array.isArray(options)) ? options : false;
  },

  renderOptions() {
    if (!this.props.disabled) {
      let optionClasses = 'simple-select-option hover-row bg-white nowrap option pointer py1 px3';

      let emptyOption = (
        <div className={optionClasses+" grey-50"} onClick={this.onClickOptionEmpty}>
          {this.props.placeholder ? this.props.placeholder : "--"}
        </div>
      );

      if (this.optionsObject()) {
        var options = this.renderOptionsFromObject(optionClasses);
      } else {
        var options = this.renderOptionsFromArray(optionClasses)
      }

      return (
        <div className={this.optionsClasses()} style={{zIndex: 1000}}>
          {(this.props.includeBlank && this.state.searchValue.length === 0) ? emptyOption : false}
          {options}
        </div>
      );
    } else {
      return false;
    }
  },

  renderOptionsFromArray(classes) {
    return this.props.options
      .filter((option) => fuzzysearch(this.state.searchValue.toLowerCase(), option.toLowerCase()))
      .map((option, index) => {
        return (
          <div className={classes + ' grey-75'}
               key={index}
               onClick={this.onClickOption.bind(this, option)}>
            {option}
          </div>
        );
    });
  },

  renderOptionsFromObject(classes) {
    return Object.keys(this.props.options).map((key, index) => {
      return (
        <div className={classes + ' grey-75'}
             key={index}
             onClick={this.onClickOption.bind(this, key)}>
          {this.props.options[key]}
        </div>
      );
    });
  },

  renderValue() {
    let value = this.optionsArray() ? this.state.value : this.props.options[this.state.value];
    let arrowStyle = {top: 1, right: 3, fontSize: '12px', height: '19px'};

    return (
      <div ref='simpleSelectValue' className={this.valueClasses()} onClick={this.onClickValue}>
        <div className='nowrap mr1'>
          { this.props.canSearch ? <input type="text" 
              className="p0"
              onChange={this.handleChange}
              onKeyDown={this.handleKey}
              ref="searchbox"
              style={{
                background: "white",
                border: "none",
                width: "3px"
              }}
              value={this.state.searchValue}
            /> : null 
          }
          {this.showValue(value)}
        </div>
        <div className={this.arrowClasses()} style={arrowStyle} />
      </div>
    );
  },

  showValue(value) {
    if (this.state.searchValue.length) {
      return false;
    } else {
      return value || this.props.placeholder;
    }
  },

  handleChange(e) {
    e.target.style.width= "auto";
    e.target.style.width = (e.target.value.length * 10) + "px";

    this.setState({
      searchValue: e.target.value
    });
  },

  handleKey(e) {
    switch(e.keyCode) {
      case 27:
        this.onClickValue();
        break;
      default:
        return true;
    }
  },

  valueBorderClass() {
    if (this.props.hasError) {
      return 'bc-orange bc-orange-hover';
    } else if (this.state.show_options) {
      return 'bc-grey-50';
    }
  },

  valueClasses() {
    let classes = ['simple-select', 'b', 'bw-1', 'flex', 'flex-justify', 'p1', 'grey-75'];
    classes.push(this.valueBorderClass());
    classes.push(this.state.show_options ? 'rounded-top-2' : "rounded-2");
    if (this.props.disabled) {
      classes.push('disabled');
    } else {
      classes.push('pointer bg-white');
    }
    return classes.join(' ');
  },

  handleOpen() {
    this.setState({
      show_options: true
    });

    if (this.props.canSearch) {
      React.findDOMNode(this.refs.searchbox).focus();
    }
  },

  handleClose() {
    if (this.props.canSearch) {
      const searchbox = React.findDOMNode(this.refs.searchbox);
      searchbox.style.width = "3px";
      searchbox.blur();
    }

    this.setState({
      searchValue: '',
      show_options: false
    });
  },

  renderContainer(...children) {
    if (this.props.disabled) {
      return (
        <div className="relative" ref="container">{children}</div>
      )
    } else {
      return (
        <Overlay 
          content={this.renderOptions()} 
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          ref="container">
        {children}
        </Overlay>
      );
    }
  },

  render() {
    return this.renderContainer(
          <input type="hidden"
                 name={this.props.name}
                 value={this.state.value}
                 disabled={this.props.disabled} />,
          this.renderValue()
    );
  }
});
