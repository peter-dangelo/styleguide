import Router from 'ampersand-router';
import React from 'react';
import NavContainer from './nav-container';
import HomePage from './pages/home';
import LayoutPage from './pages/layout';
import BasePage from './pages/base';
import NavPage from './pages/nav';
import TablesPage from './pages/tables';
import FormsPage from './pages/forms';
import ButtonsPage from './pages/buttons';
import PopoversPage from './pages/popovers';
import ModalsPage from './pages/modals';
import CardsPage from './pages/cards';
import IconsPage from './pages/icons';

let appContainer = document.getElementById('app');

export default Router.extend({
  renderPage(Page) {
    const main = React.createElement(NavContainer, {}, React.createElement(Page));

    React.render(main, appContainer);
  },

  routes: {
    '': 'home',
    'layout': 'layout',
    'base': 'base',
    'nav': 'nav',
    'tables': 'tables',
    'forms': 'forms',
    'buttons': 'buttons',
    'popovers': 'popovers',
    'modals': 'modals',
    'cards': 'cards',
    'icons': 'icons',
  },

  home() {
    this.renderPage(HomePage);
  },

  layout() {
    this.renderPage(LayoutPage);
  },

  base() {
    this.renderPage(BasePage);
  },

  nav() {
    this.renderPage(NavPage);
  },

  tables() {
    this.renderPage(TablesPage);
  },

  forms() {
    this.renderPage(FormsPage);
  },

  buttons() {
    this.renderPage(ButtonsPage);
  },

  popovers() {
    this.renderPage(PopoversPage);
  },

  modals() {
    this.renderPage(ModalsPage);
  },

  cards() {
    this.renderPage(CardsPage);
  },

  icons() {
    this.renderPage(IconsPage);
  }
});
