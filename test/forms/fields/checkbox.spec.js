import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import CheckboxField from 'forms/fields/checkbox';
import TextField from 'forms/fields/text';

describe('Checkbox', () => {
  describe('onChange', () => {
    it('does not fall into an infinite loop of array comparisons', () => {
      class Example extends React.Component {
        constructor(props) {
          super(props);
          this.render = this.render.bind(this);
          this.state = {
            showAnnual: false
          };
        }
        _onCheckboxChange(valueArray) {
          console.log('I wish this would be called when defaultValue changes');
          this.setState({ showAnnual: !!valueArray.length });
        }
        render() {
          return (
            <div>
              <CheckboxField
                name="showAnnualRate"
                ref="showAnnualRate"
                options={{
                  showRate: "Display annual rate of pay as"
                }}
                key={this.state.dynamicValue}
                defaultValue={this.state.dynamicValue ? ['showRate'] : []}
                onChange={this._onCheckboxChange}
              />
              <TextField
                name="annual_salary_override"
                key={!this.state.showAnnual}
                disabled={!this.state.showAnnual}
              />
            </div>
          );
        }
      }

      let component = TestUtils.renderIntoDocument(<Example />);
      let textField = TestUtils.findRenderedComponentWithType(
        component, TextField
      );
      expect(textField.props.disabled).to.be.true;
      expect(component.refs.showAnnualRate.value()).to.eql([]);
      component.setState({ dynamicValue: 'hello' });
      expect(component.refs.showAnnualRate.value()).to.eql(['showRate']);
      expect(textField.props.disabled).to.be.false;
    });
  });
});
