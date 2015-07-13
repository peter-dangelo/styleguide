import React from 'react';

import ActionBar from './bars/action-bar';

import ViewStore from './stores/view-store';
import ViewActions from './actions/view-actions';

const {
  createClass,
  createElement,
  render,
} = React;

var View = createClass({

  displayName: "View",

  getInitialState() {
    return ViewStore.getState();
  },


  componentDidMount() {
    ViewStore.listen(this.onChange);
    this.initScrollWatch();
  },


  componentWillUnmount() {
    ViewStore.unlisten(this.onChange);

    if (this.state.actionBar == true) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },


  onChange(state) {
    this.setState(state);
    this.initScrollWatch();
  },


  initScrollWatch() {
    if (this.state.actionBar == true) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },


  handleScroll() {
    const {
      scrollTop,
    } = document.body;

    if (scrollTop > 500 && !this.actionBarOut()) {
      ViewActions.showActionBar(true);
    } else {
      ViewActions.showActionBar(false);
    }
  },


  actionBarOut() {
    const actionBarOut = document.getElementById("action-bar-out");

    const {
      innerHeight,
    } = window;

    const {
      scrollHeight,
      scrollTop,
    } = document.body;

    if (actionBarOut) {
      return innerHeight > actionBarOut.getBoundingClientRect().top;
    } else {
      return scrollHeight - innerHeight - 250 < scrollTop
    }
  },


  actionBar() {
    if (this.state.actionBar === true && this.state.actionBarShow === true) {
      return <ActionBar title={this.state.actionBarTitle} description={this.state.actionBarDescription} actions={this.state.actionBarActions} />
    } else {
      return null
    }
  },


  render() {

    return this.actionBar();
  }

});


View.ActionBar = ActionBar;

module.exports = View;
