var alt = require('../../../alt');

var ViewActions = require('../actions/view-actions');

class ViewStore {
  constructor() {
    this.bars = {
      action: {
        use: false,
        title: null,
        subtitle: null,
        description: null,
        actions: [],
        visible: false,
        scroll: {
          elem: document.body,
          height: 0,
          top: 0,
        },
      },
    };
    this.actionBar = false;
    this.actionBarTitle = null;
    this.actionBarDescription = null;
    this.actionBarActions = [];
    this.actionBarShow = false;
    this.actionBarScollListenElem = document.body;


    this.bindActions(ViewActions);
  }


  handleScrollWatch(bool) {
    const {
      use,
      scroll,
    } = this.bars.action;


    if (this.bars.action.use) {

      if (bool === true) {
        console.log('adding even listener')
        scroll.elem.addEventListener('scroll', ViewActions.scrolling);
      } else {
        scroll.elem.removeEventListener('scroll', ViewActions.scrolling);
      }

    }
  }

  handleScrolling() {
    const {
      scrollTop,
    } = this.bars.action.scroll.elem;

    console.log('scrolling')

    if (scrollTop > 500) {
      ViewActions.showActionBar.defer(true);
    } else {
      ViewActions.showActionBar.defer(false);
    }
  }

  handleUpdateActionBarTitle(string) {
    this.bars.action.title = string;
    this.bars.action.use = true;
    ViewActions.scrollWatch.defer(true);
  }

  handleUpdateActionBarDescription(obj) {
    this.actionBarDescription = obj;
    this.actionBar = true;
  }

  handleUpdateActionBarActions(array) {
    this.actionBarActions = array;
    this.actionBar = true;
  }

  handleShowActionBar(bool) {
    this.bars.action.visible = bool;
  }

  handleScrollListenTo(elem) {
    this.bars.action.scroll.elem = elem;
  }
}

module.exports = alt.createStore(ViewStore, 'ViewStore');
