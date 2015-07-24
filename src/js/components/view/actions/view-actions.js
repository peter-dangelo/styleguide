var alt = require('../../../alt');

class ViewActions {

  scrollWatch(bool) {
    this.dispatch(bool);
  }

  scrolling() {
    this.dispatch();
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

  scrollListenTo(elem) {
    this.dispatch(elem)
  }

}

module.exports = alt.createActions(ViewActions);
