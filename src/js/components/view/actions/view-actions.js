var alt = require('../../../alt');

class ViewActions {

  scrollWatch(bool) {
    this.dispatch(bool);
  }

  updateActionBarTitle(string) {
    this.dispatch(string);
  }

  updateActionBarDescription(obj) {
    this.dispatch(obj);
  }

  updateActionBarActions(array) {
    this.dispatch(array);
  }

  showActionBar(bool) {
    this.dispatch(bool);
  }

}

module.exports = alt.createActions(ViewActions);
