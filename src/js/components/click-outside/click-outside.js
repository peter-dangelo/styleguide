import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "ClickOutside",

  propTypes: {
    onClickOutside: Type.func.isRequired
  },

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  },

  onDocumentClick(e) {
    let componentNode = this.getDOMNode();
    let targetNode = e.target;
    if(!componentNode.contains(targetNode)) {
      try {
        this.props.onClickOutside();
      } catch (e) {
        console.log(e, 'The click-outside component requires an onClickOutside function prop');
      }
    }
  },

  render() {
    return ( this.props.children );
  }

});
