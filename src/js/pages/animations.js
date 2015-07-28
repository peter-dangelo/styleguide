import React from 'react';
import Styleguide from '../styleguide';

export default React.createClass({
  displayName: "AnimationsPage",

  render() {
    return (
      <Styleguide title="Base Styles">
        <div title="Animations" description="Animations">
          <div className="container">
            <div className="col-2">
              <code className="language-css">.anim-fade</code>
            </div>
            <div className="col-2"><p className="anim-fade">Fade</p></div>
            <div className="col-2">
              <code className="language-css">.anim-move</code>
            </div>
            <div className="col-2"><p className="anim-move">Move</p></div>
          </div>
        </div>
      </Styleguide>
    );
  }
});
