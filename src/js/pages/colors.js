import React from 'react';
import ColorData from '../../lib/_colors'

let D = React.DOM;

export default React.createClass({
  displayName: "Colors",

  colorClass(color, variant){
    var klass = variant ? `${color}-${variant}` : `${color}`
    return klass
  },

  render() {
    return D.section(null, Object.keys(ColorData).map((base_color, index) =>
      D.article({className: "mb3"}, null,
        D.h3({ className: base_color}, base_color),
        Object.keys(ColorData[base_color]).map((variant,index) =>
          D.div({
            className: 'flex flex-center flex-justify'
          }, [
            D.div({className: `col-1 bg-${this.colorClass(base_color, variant)}`}, "\u00a0"),
            D.div({className: `col-1 ${this.colorClass(base_color, variant)}`}, `${ColorData[base_color][variant]}`),
            D.div({className: `col-1 b bw-1 bc-${this.colorClass(base_color, variant)}`}, "\u00a0"),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.bg-${this.colorClass(base_color, variant)}`)),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.${this.colorClass(base_color, variant)}`)),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.bc-${this.colorClass(base_color, variant)}`))
          ])
        )
    )))
  }
});


