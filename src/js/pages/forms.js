import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "FormsPage",

  // render() {
  //   return React.createElement(Styleguide, {
  //     title: "Forms Styles"
  //   }, React.createElement("div", {
  //     title: "Form",
  //     description: "The form and input styles for Namely",
  //     example: 'D.p({}, "Some sample text for this paragraph component")'
  //   }, React.createElement("p", {}, "Some sample text for this paragraph component"))
  //   );
  // }

  render() {
    return <Styleguide title="Forms Styles">
        <div title="Form" description="The form and input styles for Namely">
          <form>
            <h3>This is a form</h3>

            <h5 className="mb0">Checkboxes</h5>
            <input type="checkbox"></input>

            <h5 className="mb0">Select</h5>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>




          </form>

        </div>
      </Styleguide>
  }
});



