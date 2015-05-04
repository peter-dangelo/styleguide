import React from 'react';
import Styleguide from '../styleguide';
import Select from 'react-select';

let D = React.DOM;


var options = [
    { value: 'london', label: 'London' },
    { value: 'newyork', label: 'New York' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'san_francisco', label: 'San Francisco' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

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
                <div className="flex flex-wrap mb1">
                  <div><input type="checkbox" id="checkbox_1"></input></div>
                  <div><label className="ml2" htmlFor="checkbox_1">Label 1</label></div>
                </div>
                <div className="flex flex-wrap">
                  <div><input type="checkbox" id="checkbox_2"></input></div>
                  <div><label className="ml2" htmlFor="checkbox_2">Label 2</label></div>
                </div>
              </div>
              <div>
                <p>Read-only, checked</p>
                <div className="flex flex-wrap">
                  <div><input type="checkbox" id="checkbox_3" readOnly="true" checked="true"></input></div>
                  <div><label className="right ml2" htmlFor="checkbox_3">Label</label></div>
                </div>
              </div>
            </div>
            <hr />
            <h3>Radio buttons</h3>
            <p className="orange">Checked (bullet?) icon needed</p>
            <div className="flex flex-wrap mb1">
              <div><input type="radio" id="radio_1" name="radios"></input></div>
              <div><label className="ml2" htmlFor="radio_1">Label 1</label></div>
            </div>
            <div className="flex flex-wrap">
              <div><input type="radio" id="radio_2" name="radios"></input></div>
              <div><label className="ml2" htmlFor="radio_2">Label 2</label></div>
            </div>
            <hr />
            <h3>Select</h3>
            <p className="orange">Arrow icons needed</p>
            <div className="py3">
              <h4>Native</h4>
              <div className="col-3">
                <label htmlFor="select_1" className="px2 mb1">Select</label>
                <select id="select_1" className="bc-grey-25">
                  {options.map(function(option){
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="py3">
              <h4>React Select</h4>
              <p><a href="https://github.com/JedWatson/react-select">https://github.com/JedWatson/react-select</a></p>
              <div className="col-3 left">
                <label className="px2 mb1">Default</label>
                <Select
                  searchable={false}
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={logChange}
                  placeholder="- Select Office -"
                />
              </div>
              <div className="col-3 left">
                <label className="px2 mb1">Multi</label>
                <Select
                  searchable={false}
                  multi={true}
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={logChange}
                  placeholder="- Select Office -"
                />
              </div>
              <div className="col-3 left">
                <label className="px2 mb1">Searchable (like Chosen)</label>
                <Select
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={logChange}
                  placeholder="- Select Office -"
                />
              </div>
            </div>
          </form>
        </div>
      </Styleguide>
  }
});



