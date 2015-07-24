var alt = require('../../../alt');

var ViewActions = require('../actions/view-actions');

class ViewStore {
  constructor() {
    this.bars = {
      action: {
        use: false,
        title: null,
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

    // refactor with alt helper
    this.bindListeners({
      handleUpdateActionBarTitle: ViewActions.UPDATE_ACTION_BAR_TITLE,
      handleUpdateActionBarDescription: ViewActions.UPDATE_ACTION_BAR_DESCRIPTION,
      handleUpdateActionBarActions: ViewActions.UPDATE_ACTION_BAR_ACTIONS,
      handleShowActionBar: ViewActions.SHOW_ACTION_BAR,
    });
  }


  handleUpdateActionBarTitle(string) {
    this.actionBarTitle = string;
    this.actionBar = true;
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
    if (this.actionBarShow !== bool) {
      this.actionBarShow = bool;
    }
  }
}

module.exports = alt.createStore(ViewStore, 'ViewStore');
