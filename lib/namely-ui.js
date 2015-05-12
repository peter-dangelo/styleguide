import 'core-js/shim';
import Pkg from '../package.json';

import Buttons from './buttons/base';
import Forms from './forms/base';
import Icons from './icon';

export default {

  // list of export-ready components
  Buttons,
  Forms,
  Icons,


  version() {
    return Pkg.version;
  },

  styles() {
    return Pkg.styles;
  }

}
