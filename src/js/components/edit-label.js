import React from 'react';
import TextField from './forms/fields/text';
import Icon from './icon';
import Popover from './popover';

const {
  createClass,
  PropTypes: Type
} = React;

export default createClass({
  displayName: 'EditLabel',

  propTypes: {
    label: Type.string.isRequired,
    onSave: Type.func.isRequired,
    onDelete: Type.func.isRequired
  },

  getInitialState() {
    return {
      isEditing: false
    };
  },

  _triggerEdit() {
    this.setState({ isEditing: true });
  },

  _handleSave() {
    const val = this.refs.labelInput.getDOMNode().value;
    this.setState({ isEditing: false });
    this.props.onSave(val);
  },

  _handleDelete() {
    this.props.onDelete();
  },

  _handleKey(e) {
    // Need to find out real keyCode for Enter
    if (e.keyCode === 43) {
      e.preventDefault();
      this._handleSave();
    }
  },

  render() {
    if(this.state.isEditing) {
      return (
        <div className="flex flex-center" >
          <input
            className="field-light mr2 py1 h3 bold"
            defaultValue={this.props.label}
            ref="labelInput"
            type="text"
            onKeyDown={this._handleKey}
          />
          <Icon 
            name="check" 
            extraClasses={["blue", "px2", "small", "m0"]}
            onClick={this._handleSave}
           />
          <Popover>
            <Icon 
              name="delete" 
              extraClasses={["blue", "px2", "small", "m0"]} 
            />
            <div className="white">
              <h4>Are you sure?</h4>
              {this.props.children}
              <div className="right-align">
                <button className="button-link button-sm button-secondary mr2">Cancel</button>
                <button className="button-danger button-sm" onClick={this._handleDelete} >Delete</button>
              </div>
            </div>
          </Popover>
        </div>
      );
    } else {
      return (
        <div className="flex flex-center" >
          <h3 className="blue py1 m0">{this.props.label}</h3>
          <Icon name="pencil" extraClasses={["blue", "py1", "ml1", "small", "m0"]} onClick={this._triggerEdit} />
        </div>
      );
    }
  }
});
