import Router from 'ampersand-router';
import React from 'react';
import HomePage from './pages/home';

let appContainer = document.getElementById('app');

export default Router.extend({
  routes: {
    '': 'home',
    'nav': 'nav',
    'tables': 'tables'
  },

  home() {
    React.render(HomePage(), appContainer);
  },

  nav() {
    React.render(React.DOM.h1({}, "Nav Page"), appContainer);
  },

  tables() {
    React.render(React.DOM.h1({}, "Tables Page"), appContainer);
  }
});



