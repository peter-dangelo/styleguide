import React from 'react';
import localLinks from 'local-links';

let D = React.DOM;

export default React.createClass({
  displayName: 'NavContainer',

  componentDidMount() {
    this.makeActiveLink();
  },

  componentDidUpdate() {
    this.makeActiveLink();
  },

  makeActiveLink() {
    let self = this;
    let pathname = window.location.pathname;
    let navItems = self.refs.navList.getDOMNode().querySelectorAll('.nav-item');

    for(let i = 0; i < navItems.length; i++) {
      let link = navItems.item(i).children.item(0);

      if(localLinks.active(link, pathname)) {
        navItems.item(i).classList.add('bg-white');
        navItems.item(i).classList.add('blue');
      } else {
        navItems.item(i).classList.remove('bg-white');
        navItems.item(i).classList.remove('blue');
      }
    }
  },

  handleClick(e) {
    let pathname = localLinks.getLocalPathname(e);

    if(pathname){
      e.preventDefault();
      window.router.history.navigate(pathname, {trigger: true});
    } else {
      return false;
    }
  },

  render() {
    let self = this;

    return D.div({
      className: 'main flex tall'
    }, [
      D.nav({
        className: 'nav nav-primary col-2 tall bg-grey-95 white',
        role: 'navigation',
        onClick: self.handleClick
      }, [
        D.ul({
          className: 'nav-list',
          ref: 'navList'
        }, [
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/' }, 'Home')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/layout' }, 'Layout')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/base' }, 'Base Styles')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/nav' }, 'Navigation')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/tables' }, 'Tables + Lists')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/forms' }, 'Forms')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/buttons' }, 'Buttons')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/icons' }, 'Icons')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/popovers' }, 'Popovers')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/modals' }, 'Modals')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/cards' }, 'Cards')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/animations' }, 'Animations')),
          D.li({className: "nav-item py2 px3"}, D.a({ className: "nav-link", href: '/accordions' }, 'Accordions'))
        ])
      ]),
      D.section({
        className: 'content-container flex-auto tall'
      }, self.props.children)
    ]);
  }
});
