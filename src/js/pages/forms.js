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
        <div title="Forms">
          <form>
            <hr />

            <p>Default fields</p>
            <TextField label="Text" placeholder="Placeholder" extraClasses={['py2']} />
            <NumberField label="Number" extraClasses={['py2']} units="Units"  />
            <DateField label="Date" extraClasses={['py2']} />
            <SimpleSelect label="Simple Select" options={options} promptText="- Select -" extraClasses={['py2']}/>
            <TextArea label="Textarea" extraClasses={['py2']} />
            <Checkbox label="Checkbox" extraClasses={['py2']}/>
            <Radio name="radios1" label="Radio 1" extraClasses={['py2']}/>
            <Radio name="radios1" label="Radio 2" extraClasses={['py2']}/>

            <p className="mt4">Inactive fields</p>
            <TextField label="Text" placeholder="Placeholder" inactive={true} extraClasses={['py2']} />
            <NumberField label="Number" inactive={true} extraClasses={['py2']} />
            <DateField label="Date" inactive={true} />
            <SimpleSelect label="Simple Select" options={options} inactive={true} extraClasses={['py2']}/>
            <TextArea label="Textarea" inactive={true} extraClasses={['py2']} />
            <Checkbox label="Checkbox" inactive={true} extraClasses={['py2']}/>
            <Checkbox label="Checked read-only" readOnly={true} checked={true} extraClasses={['py2']}/>
            <Radio name="radios2" label="Radio" inactive={true} disabled={true} extraClasses={['py2']} />


            <p className="mt4">Fields within grey block</p>
            <div className="bg-grey-10 p3 rounded-3 grey-form">
              <p>Default fields</p>
              <TextField label="Text" placeholder="Placeholder" extraClasses={['py2']}/>
              <NumberField label="Number" extraClasses={['py2']} units="Units" />
              <DateField label="Date" extraClasses={['py2']}/>
              <SimpleSelect label="Simple Select" options={options} promptText="- Select -" extraClasses={['py2']}/>
              <TextArea label="Textarea" extraClasses={['py2']}/>
              <Checkbox label="Checkbox" extraClasses={['py2']}/>
              <Radio name="radios3" label="Radio 1" extraClasses={['py2']}/>
              <Radio name="radios3" label="Radio 2" extraClasses={['py2']}/>
              <hr/>
              <p>Inactive fields</p>
              <TextField label="Text" placeholder="Placeholder" inactive={true} extraClasses={['py2']} />
              <NumberField label="Number" inactive={true} extraClasses={['py2']} />
              <DateField label="Date" inactive={true} />
              <SimpleSelect label="Simple Select" options={options} inactive={true} extraClasses={['py2']}/>
              <TextArea label="Textarea" inactive={true} extraClasses={['py2']} />
              <Checkbox label="Checkbox" inactive={true} extraClasses={['py2']}/>
              <Checkbox label="Checked read-only" readOnly={true} checked={true} extraClasses={['py2']}/>
              <Radio name="radios2" label="Radio" inactive={true} disabled={true} extraClasses={['py2']} />
            </div>

            <hr />

            <h3>React Select</h3>
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
          </form>
        </div>
      </Styleguide>
  }
});



