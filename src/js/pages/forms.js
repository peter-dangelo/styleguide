import React from 'react';
import Styleguide from '../styleguide';
import Select from 'react-select';
import DateField from '../components/forms/fields/date';
import NumberField from '../components/forms/fields/number';
import TextField from '../components/forms/fields/text';
import TextArea from '../components/forms/fields/text_area';
import Checkbox from '../components/forms/fields/checkbox';
import Radio from '../components/forms/fields/radio';
import SimpleSelect from '../components/forms/fields/simple_select';

let D = React.DOM;

var options = [
    { value: 'london', label: 'London' },
    { value: 'newyork', label: 'New York' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'san_francisco', label: 'San Francisco' }
];

function _onChange(val) {
  console.log("Selected: " + val);
}

function _onFocus() {
  console.log("Focus");
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
              <TextField label="Text" placeholder="Placeholder" />
              <NumberField label="Number"/>
              <DateField label="Date"/>
            </div>
            <hr />
            <h3>Textarea</h3>
            <TextArea label="Bio" />
            <hr />
            <h3>Checkboxes</h3>
            <div className="flex flex-justify">
              <div>
                <p>Default</p>
                <Checkbox label="Checkbox 1" />
                <Checkbox label="Checkbox 2" />
              </div>
              <div>
                <p>Read-only, checked</p>
                <Checkbox label="Checkbox 3" readOnly={true} checked={true} />
              </div>
            </div>
            <hr />
            <h3>Radio buttons</h3>

            <Radio name="radios" label="Radio 1"/>
            <Radio name="radios" label="Radio 2"/>

            <hr />

            <h3>Select</h3>
            <div className="py3">
              <h4>Native</h4>
              <SimpleSelect label="Simple Select" options={options} />
            </div>
            <div className="py3">
              <h4>React Select</h4>
              <p><a href="https://github.com/JedWatson/react-select">https://github.com/JedWatson/react-select</a></p>
              <div className="col-3 left mr2">
                <label className="px2 mb1">Default</label>
                <Select
                  searchable={false}
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={_onChange}
                  placeholder="- Select Office -"
                />
              </div>
              <div className="col-3 left mr2">
                <label className="px2 mb1">Multi</label>
                <Select
                  searchable={false}
                  multi={true}
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={_onChange}
                  placeholder="- Select Office -"
                />
              </div>
              <div className="col-3 left mr2">
                <label className="px2 mb1">Searchable (like Chosen)</label>
                <Select
                  name="form-field-nameczXCzx"
                  options={options}
                  onChange={_onChange}
                  placeholder="- Select Office -"
                  onFocus={_onFocus}
                />
              </div>
            </div>
          </form>
        </div>
      </Styleguide>
  }
});



