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
            <p>Set their widths with col classes.</p>

            <div className="flex flex-justify">
              <div>
                <label htmlFor="company_name" className="px2 mb1">Text field</label>
                <input id="company_name" type="text" placeholder="Text field"></input>
              </div>
              <div>
                <label htmlFor="number_field" className="px2 mb1">Number</label>
                <input className="col-3" id="number_field" type="number"></input>
                <p className="orange">Arrow icons needed</p>
              </div>
              <div>
                <label htmlFor="date_field" className="px2 mb1">Date Field</label>
                <input id="date_field" type="text"></input>
                <p className="orange">Calendar icon needed</p>
              </div>


            </div>

            <hr />

            <h3>Textarea</h3>
            <label htmlFor="bio" className="px2 mb1">Bio</label>
            <textarea id="bio"></textarea>

            <hr />

            <h3>Checkboxes</h3>
            <p className="orange">Check icon needed</p>
            <div className="flex flex-justify">
              <div>
                <p>Default</p>
                <div className="flex flex-wrap">
                  <div><input type="checkbox" id="checkbox_1"></input></div>
                  <div><label className="ml2" htmlFor="checkbox_1">Label</label></div>
                </div>
              </div>
              <div>
                <p>Read-only, checked</p>
                <div className="flex flex-wrap">
                  <div><input type="checkbox" id="checkbox_2" readOnly="true" checked="true"></input></div>
                  <div><label className="right ml2" htmlFor="checkbox_2">Label</label></div>
                </div>
              </div>
            </div>

            <hr />

            <h3>Radio buttons</h3>

            <input type="radio" name="radio"></input>

            <hr />

            <h3>Select</h3>
            <p className="orange">Arrow icons needed</p>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>

          </form>

        </div>
      </Styleguide>
  }
});



