import 'core-js/shim';
import Pkg from '../package.json';

import GridBlock from './grid-block';
import Button from './buttons/button';

export default {

  // list of export-ready components
  GridBlock,
  Button,

  version() {
    return Pkg.version;
  },

  styles() {
    return Pkg.styles;
  }

}
