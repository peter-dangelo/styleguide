import React from 'react';
import ColorData from '../../lib/colors'

let D = React.DOM;

export default React.createClass({
  displayName: "Colors",
  render() {
    return D.div(null, Object.keys(ColorData).map((base_color, index) =>
      D.div(null, { base_color },
        D.div(null, Object.keys(ColorData[base_color]).map((variant,index) =>
          D.div({
            className: 'row'
          }, [
            D.div({className: 'col-1', style: {"background-color": ColorData[base_color][variant]}}, "\u00a0"),
            D.div({className: 'col-2'}, `${ColorData[base_color][variant]}`),
            D.div({className: 'col-2'}, D.code({className: 'language-css'},`.${base_color}-${variant}`))
          ])
        ))
    )))
  }
});


