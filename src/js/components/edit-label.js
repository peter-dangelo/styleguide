import React from 'react';
import TextField from './forms/fields/text';
import Icon from './icon';

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

  _handleSave(e) {
    const val = this.refs.labelInput.getDOMNode().value;
    this.setState({ isEditing: false });
    this.props.onSave(val);
  },

  _handleDelete(e) {
    this.setState({ isEditing: false });
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
          />
          <Icon 
            name="check" 
            extraClasses={["blue", "px2", "small", "m0"]}
            onClick={this._handleSave}
           />
          <Icon 
            name="delete" 
            extraClasses={["blue", "px2", "small", "m0"]} 
            onClick={this._handleDelete}
          />
        </div>
      );
    } else {
      return (
        <div className="flex flex-center" >
          <h3 className="blue">{this.props.label}</h3>
          <Icon name="pencil" extraClasses={["blue", "ml1", "small", "m0"]} onClick={this._triggerEdit} />
        </div>
      );
    }
  }
});
