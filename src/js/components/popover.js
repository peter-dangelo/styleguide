import React from 'react';

const {
  createClass,
  PropTypes : Type
} = React;

export default createClass({
  displayName: 'Popover',

  getInitialState() {
    return {
      open: false
    };
  },

  _showPop() {
    const popStyle = {
      top: "120%",
      width: "200px"
    };

    return (
      <div className="bg-grey-90 p3 rounded-2 absolute right-0" style={popStyle}>
        {this.props.children[1]}
      </div>
    );
  },

  _togglePop(e) {
    const { open } = this.state;

    if (open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  },

  render() {
    return (
      <div className="relative" onClick={this._togglePop}>
        {this.props.children[0]}
        {this.state.open ? this._showPop() : void 0}
      </div>
    );
  }
});
