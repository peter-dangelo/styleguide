import React from 'react';

import ActionBar from './bars/action-bar';

import ViewStore from './stores/view-store';
import ViewActions from './actions/view-actions';

const {
  createClass,
  createElement,
  render,
} = React;

const {
  CSSTransitionGroup,
} = React.addons;

var View = createClass({

  displayName: "View",

  getInitialState() {
    return ViewStore.getState();
  },


  componentDidMount() {
    ViewStore.listen(this.onChange);
  },


  componentWillUnmount() {
    ViewActions.scrollWatch(false);
    ViewStore.unlisten(this.onChange);
  },


  onChange(state) {
    this.setState(state);
  },


  actionBar() {
    const {
      action,
    } = this.state.bars;

    if (action.use === true && action.visible === true) {
      return <ActionBar key="action-bar" {...action} />
    } else {
      return null
    }
  },


  render() {
    const content = this.actionBar()

    return <CSSTransitionGroup transitionName="action-bar" >{content}</CSSTransitionGroup>;
  }

});


View.ActionBar = ActionBar;

module.exports = View;
