import React from 'react';
import ColorData from '../../lib/_colors'

let D = React.DOM;

export default React.createClass({
  displayName: "Colors",

  render() {
    return D.section(null, Object.keys(ColorData).map((base_color, index) =>
      D.article({className: "mb3"}, null,
        D.h3({}, base_color),
        Object.keys(ColorData[base_color]).map((variant,index) =>
          D.div({
            className: 'row mb2'
          }, [
            D.div({className: `col-1 bg-${base_color}-${variant}`}, "\u00a0"),
            D.div({className: `col-1 ${base_color}-${variant}`}, `${ColorData[base_color][variant]}`),
            D.div({className: `col-1 b bw-1 bc-${base_color}-${variant}`}, "\u00a0"),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.bg-${base_color}-${variant}`)),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.${base_color}-${variant}`)),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.bc-${base_color}-${variant}`))
          ])
        )
    )))
  }
});


