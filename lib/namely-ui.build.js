'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('core-js/shim');

var _packageJson = require('./package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _srcJsComponentsGridBlock = require('./src/js/components/grid-block');

var _srcJsComponentsGridBlock2 = _interopRequireDefault(_srcJsComponentsGridBlock);

exports['default'] = {

  // list of export-ready components
  GridBlock: _srcJsComponentsGridBlock2['default'],

  version: function version() {
    return _packageJson2['default'].version();
  }

};
module.exports = exports['default'];
