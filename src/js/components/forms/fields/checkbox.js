import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Checkbox",

  propTypes: {
    id: Type.string,
    label: Type.string,
    placeholder: Type.string,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps() {
    return {
      readonly: false,
      id: '',
      checked: false
    }
  },

  getInitialState() {
    return { isChecked: this.props.checked };
  },

  onChange() {
    if(!this.props.readOnly) {
      this.setState({isChecked: !this.state.isChecked})
    }
  },

  label() {
    if(this.props.label) {
      return <label className="ml2">{this.props.label}</label>;
    }
  },

  render() {
    return  <div className="flex flex-wrap mb1">
        <div>
          <input
            type="checkbox"
            id=""
            checked={this.state.isChecked}
            onChange={this.onChange}
            readOnly={this.props.readOnly}
          >
          </input>
        </div>
        <div>{this.label()}</div>
      </div>
  }
});
