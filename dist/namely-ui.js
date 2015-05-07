'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('core-js/shim');

var _packageJson = require('../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _gridBlock = require('./grid-block');

var _gridBlock2 = _interopRequireDefault(_gridBlock);

var _buttonsButton = require('./buttons/button');

var _buttonsButton2 = _interopRequireDefault(_buttonsButton);

exports['default'] = {

  // list of export-ready components
  GridBlock: _gridBlock2['default'],
  Button: _buttonsButton2['default'],

  version: function version() {
    return _packageJson2['default'].version;
  },

  styles: function styles() {
    return _packageJson2['default'].styles;
  }

};
module.exports = exports['default'];
