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
import AnimationsPage from './pages/animations';
import AccordionsPage from './pages/accordions';
import ViewPage from './pages/view';
import ViewActions from './components/view/actions/view-actions';

let appContainer = document.getElementById('app');

export default Router.extend({

  renderPage(Page) {
    ViewActions.flush();
    const main = React.createElement(NavContainer, {}, React.createElement(Page));

    React.render(main, appContainer);
  },

  routes: {
    '': 'home',
    'accordions': 'accordions'
    'animations': 'animations',
    'base': 'base',
    'buttons': 'buttons',
    'cards': 'cards',
    'forms': 'forms',
    'icons': 'icons',
    'layout': 'layout',
    'modals': 'modals',
    'nav': 'nav',
    'popovers': 'popovers',
    'tables': 'tables',
    'view': 'view'
  },

  home() {
    this.renderPage(HomePage);
  },

  accordions() {
    this.renderPage(AccordionsPage);
  },

  animations() {
    this.renderPage(AnimationsPage);
  },

  base() {
    this.renderPage(BasePage);
  },

  buttons() {
    this.renderPage(ButtonsPage);
  },

  cards() {
    this.renderPage(CardsPage);
  },

  forms() {
    this.renderPage(FormsPage);
  },

  icons() {
    this.renderPage(IconsPage);
  },

  layout() {
    this.renderPage(LayoutPage);
  },

  modals() {
    this.renderPage(ModalsPage);
  },

  nav() {
    this.renderPage(NavPage);
  },

  popovers() {
    this.renderPage(PopoversPage);
  },

  tables() {
    this.renderPage(TablesPage);
  },

  view() {
    this.renderPage(ViewPage);
  }
});
