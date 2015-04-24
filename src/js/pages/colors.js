import React from 'react';
import ColorData from '../../lib/colors'

let D = React.DOM;

export default React.createClass({
  displayName: "Colors",
  render() {
    return D.ul(null, Object.keys(ColorData).map((base_color, index) =>
      D.li(null, { base_color },
        D.ul(null, Object.keys(ColorData[base_color]).map((variant,index) =>
          D.li({style: {"background-color": ColorData[base_color][variant]}}, variant, D.span(null, {}, ColorData[base_color][variant]))
        ))
    )))
  }
});


