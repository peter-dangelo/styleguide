import React from 'react';
import fuzzysearch from 'fuzzysearch';
import { assign, pick } from 'lodash';
import Overlay from '../../../overlays/overlay-click';
import Option from './option';
import toObject from '../../../utils/to-object';

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
      focusedOption: this.props.value || null,
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

  onClickOption(option) {
    this.setState({
      value: option,
      show_options: false
    });
    this.refs.container.hide();
  },

  onFocusOption(value) {
    this.setState({
      focusedOption: value
    });
  },

  onClickValue(e) {
    if (!this.props.disabled) {

      if (this.state.show_options) {
        this.refs.container.hide();
      } else {
        React.findDOMNode(this.refs.searchbox).focus();
      }

      this.setState({show_options: !this.state.show_options});
    } 
  },

  optionsClasses() {
    let classes = ['absolute', 'bb', 'bl', 'br', 'bw-1', 'left-0', 'right-0', 'rounded-bottom-2'];
    classes.push(this.state.show_options ? 'bc-grey-50' : 'bc-grey-25');
    return classes.join(' ');
  },

  arrowClasses() {
    let classes = ['h6', 'ml1', 'relative'];
    classes.push(this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down');

    return classes.join(' ');
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

  // get available options based on props and search value
  getAvailableOptions(searchValue = this.state.searchValue) {
    let options = {};
    const proptions = Array.isArray(this.props.options) ? toObject(this.props.options) : this.props.options;

    if (this.props.includeBlank) {
      options[null] = this.props.placeholder || "--";
    }

    options = assign(options, proptions); 
    
    let availableKeys = Object.keys(options)
      .filter((value) => {
        if (searchValue.length > 0 && value === "null") {
          return false;
        } else {
          return fuzzysearch(searchValue.toLowerCase(), options[value].toLowerCase());
        }
      });

    // using the available keys, pick those properties from the options object
    return pick(options, availableKeys);
  },

  renderOptionsList() {
    const options = this.getAvailableOptions();

    const components = Object.keys(options)
      .map((value, index) => {
        const isFocused = String(this.state.focusedOption) === value;
        const classes = [];
        if (isFocused) {
          classes.push('bg-grey-25');
        } else {
          classes.push('bg-white');
        }

        return (
          <Option
            disabled={false}
            extraClasses={classes}
            isFocused={isFocused}
            key={index}
            onFocus={this.onFocusOption}
            onSelect={this.onClickOption}
            value={value}
          >
            {options[value]}
          </Option>
        );
      });

      return components;
  },

  renderOptions() {
    if (!this.props.disabled) {
      return (
        <div className={this.optionsClasses()} style={{zIndex: 1000}}>
          {this.renderOptionsList()}
        </div>
      );
    } else {
      return false;
    }
  },

  renderValue() {
    let { value } = this.state;
    let arrowStyle = {top: 1, right: 3, fontSize: '12px', height: '19px'};

    return (
      <div 
        ref='simpleSelectValue' 
        className={this.valueClasses()} 
        onClick={this.onClickValue}
      >
        <div className='nowrap mr1'>
          {this.renderSearchBox()}
          {this.showValue(value)}
        </div>
        <div className={this.arrowClasses()} style={arrowStyle} />
      </div>
    );
  },

  renderSearchBox() {
    // if search is enabled, render the input, otherwise render a div to handle keyDown events.
    if (this.props.canSearch) {
      return (
        <input type="text" 
          className="p0"
          onChange={this.handleChange}
          onKeyDown={this.handleKey}
          ref="searchbox"
          style={{
            background: "white",
            border: "none",
            width: "3px"
          }}
          tabIndex="0"
          value={this.state.searchValue}
        />
      );
    } else {
      return (
        <div 
          ref="searchbox" 
          className="inline-block" 
          onKeyDown={this.handleKey} 
          style={{
            height: "3px", 
            outline: "none",
            width: "3px"
          }}
          tabIndex="0" 
        />
      );
    }
  },

  showValue(value) {
    const options = this.getAvailableOptions();

    if (this.state.searchValue.length) {
      return false;
    } else {
      return options[value] || this.props.placeholder;
    }
  },

  handleChange(e) {
    const options = this.getAvailableOptions(e.target.value);
    const firstOption = options[Object.keys(options)[0]];

    // automagically extend the width of the searchbox based on input
    e.target.style.width= "auto";
    e.target.style.width = (e.target.value.length * 10) + "px";

    this.setState({
      focusedOption: firstOption,
      searchValue: e.target.value
    });
  },

  handleKey(e) {
    switch(e.keyCode) {
      // Enter
      case 13:
        e.stopPropagation();
        this.onClickOption(this.state.focusedOption);
        break;
      // ESC
      case 27:
        this.onClickValue(e);
        break;
      // up arrow
      case 38:
        e.preventDefault();
        this.selectPrevOption();
        break;
      // down arrow
      case 40: 
        e.preventDefault();
        this.selectNextOption();
        break;
      default:
        return true;
    }
  },

  selectPrevOption() {
    const options = this.getAvailableOptions();
    const keys = Object.keys(options);
    const index = keys.indexOf(this.state.focusedOption);
    let newOption = keys[index - 1];

    if (index <= 0) {
      newOption = keys[keys.length - 1];
    }

    this.setState({
      focusedOption: newOption
    });
  },

  selectNextOption() {
    const options = this.getAvailableOptions();
    const keys = Object.keys(options);
    const index = keys.indexOf(String(this.state.focusedOption));
    let newOption = keys[index + 1];

    if ((index + 1) === keys.length) {
      newOption = keys[0];
    }

    this.setState({
      focusedOption: newOption
    });
  },

  handleOpen() {
    this.setState({
      focusedOption: this.state.value,
      show_options: true
    });
  },

  handleClose() {
    if (this.props.canSearch) {
      const searchbox = React.findDOMNode(this.refs.searchbox);
      searchbox.style.width = "3px";
      searchbox.blur();
    }

    this.setState({
      focusedOption: null,
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
