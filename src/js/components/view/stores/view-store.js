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



  onScrollWatch(bool) {
    const {
      use,
      scroll,
    } = this.bars.action;

    if (use) {

      if (bool === true) {

        scroll.elem.addEventListener('scroll', ViewActions.scrolling);
        window.addEventListener('resize', ViewActions.setDimensions);
        ViewActions.setDimensions.defer();
        ViewActions.scrolling.defer();

      } else {

        scroll.elem.removeEventListener('scroll', ViewActions.scrolling);
        window.removeEventListener('resize', ViewActions.setDimensions);
      }

    } else {
      scroll.elem.removeEventListener('scroll', ViewActions.scrolling);
    }

  }


  onScrolling() {
    const {
      elem,
      enter,
      exit,
      height,
    } = this.bars.action.scroll;

    const {
      scrollHeight,
      scrollTop,
    } = elem;

    if ( (scrollTop > enter) && !(scrollHeight - height - exit < scrollTop) ) {

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

  onCreateActionBar(obj) {
  }


  onShowActionBar(bool) {
    this.bars.action.visible = bool;
  }


  onScrollListenTo(elem) {
    this.bars.action.scroll.elem = elem;
  }
}

module.exports = alt.createStore(ViewStore, 'ViewStore');
