import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "FormsPage",

  render() {
    return <Styleguide title="Forms Styles">
        <div title="Form" description="The form and input styles for Namely">
          <form>

            <hr />

            <h3>Text inputs</h3>

            <div className="flex flex-justify">
              <div>
                <label htmlFor="company_name" className="px2 mb1">Company Name</label>
                <input id="company_name" type="text" placeholder="Company Name"></input>
              </div>
              <div>
                <label htmlFor="number_field" className="px2 mb1">Number Field</label>
                <input id="number_field" type="number"></input>
              </div>
              <div>
                <label htmlFor="date_field" className="px2 mb1">Date Field</label>
                <input id="date_field" type="text"></input>
              </div>


            </div>

            <hr />

            <h3>Textarea</h3>
            <label htmlFor="bio" className="px2 mb1">Bio</label>
            <textarea id="bio"></textarea>

            <hr />

            <h3>Checkboxes</h3>
            <div className="flex flex-justify">
              <div>
                <p>Default</p>
                <input type="checkbox"></input>
              </div>
              <div>
                <p>Read-only, checked</p>
                <input type="checkbox" readOnly="true" checked="true"></input>
              </div>
            </div>

            <hr />

            <h3>Radio buttons</h3>
            <input type="radio" name="radio"></input>

            <hr />

            <h3>Select</h3>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>

          </form>

        </div>
      </Styleguide>
  }
});



