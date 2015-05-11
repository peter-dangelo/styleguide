'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('core-js/shim');

var _packageJson = require('../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _buttonsBase = require('./buttons/base');

var _buttonsBase2 = _interopRequireDefault(_buttonsBase);

var _formsBase = require('./forms/base');

var _formsBase2 = _interopRequireDefault(_formsBase);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

exports['default'] = {

  // list of export-ready components
  Buttons: _buttonsBase2['default'],
  Forms: _formsBase2['default'],
  Icons: _icon2['default'],

  version: function version() {
    return _packageJson2['default'].version;
  },

  styles: function styles() {
    return _packageJson2['default'].styles;
  }

};
module.exports = exports['default'];
