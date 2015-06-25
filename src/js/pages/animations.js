import React from 'react';
import Styleguide from '../styleguide';

export default React.createClass({
  displayName: "AnimationsPage",

  render() {
    return (
      <Styleguide title="Base Styles">
        <div title="Animations" description="Animations">
          <div calssName="container">
            <div className="col-2">
              <code className="language-css">.fade</code>
            </div>
            <div className="col-2"><p className="fade">Fade</p></div>
          </div>
        </div>
      </Styleguide>
    );
  }
});
