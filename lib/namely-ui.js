import 'core-js/shim';
import Pkg from './package.json';

import GridBlock from './src/js/components/grid-block';

export default {

  // list of export-ready components
  GridBlock,

  version() {
    return Pkg.version();
  }

}
