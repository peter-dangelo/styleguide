import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Radio",

  propTypes: {
    id: Type.string,
    label: Type.string,
    readOnly: Type.bool,
    checked: Type.bool,
    name: Type.string
  },

  getDefaultProps() {
    return {
      readonly: false,
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
    return <div className="flex flex-wrap mb1">
        <div><input type="radio" name={this.props.name}></input></div>
        <div>{this.label()}</div>
      </div>
    // <div className="flex flex-wrap mb1">
    //     <div>
    //       <input
    //         type="checkbox"
    //         id=""
    //         checked={this.state.isChecked}
    //         onChange={this.onChange}
    //         readOnly={this.props.readOnly}
    //       >
    //       </input>
    //     </div>
    //     <div>{this.label()}</div>
    //   </div>
  }
});





            // <div className="flex flex-wrap mb1">
            //   <div><input type="radio" id="radio_1" name="radios"></input></div>
            //   <div><label className="ml2" htmlFor="radio_1">Label 1</label></div>
            // </div>
