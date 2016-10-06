import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import CheckboxField from 'forms/fields/checkbox';

describe('CheckboxField', () => {
  describe('value()', () => {
    it('returns empty Array by default', () => {
      expect(
        TestUtils.renderIntoDocument(
          <CheckboxField
            name="default_checkbox"
            options={['value1', 'value2']}
          />
        ).value()
      ).to.eql([]);
    });

    it('returns array with defaultValue when set', () => {
      const component = TestUtils.renderIntoDocument(
        <CheckboxField
          name="default_checkbox"
          options={['value1', 'value2']}
          defaultValue={['value2']}
        />
      );

      expect(
        component.value()
      ).to.eql(['value2']);
      
      expect(
        React.findDOMNode(component).getElementsByTagName('input')[0].checked
      ).to.be.false;

      expect(
        React.findDOMNode(component).getElementsByTagName('input')[1].checked
      ).to.be.true;
    });

    it('returns array with defaultValue when set with object', () => {
      const component = TestUtils.renderIntoDocument(
        <CheckboxField
          name="default_checkbox"
          options={{
            value1: 'some value',
            value2: 'another value'
          }}
          defaultValue={['value2']}
        />
      );

      expect(
        component.value()
      ).to.eql(['value2']);
      
      expect(
        React.findDOMNode(component).getElementsByTagName('input')[0].checked
      ).to.be.false;

      expect(
        React.findDOMNode(component).querySelectorAll('span.label-right')[0].textContent
      ).to.eql("some value");

      expect(
        React.findDOMNode(component).getElementsByTagName('input')[1].checked
      ).to.be.true;

      expect(
        React.findDOMNode(component).querySelectorAll('span.label-right')[1].textContent
      ).to.eql("another value");
    });
  });

  describe('onChange()', () => {
    it('triggers the onChange function when changed', (done) => {
      const component = TestUtils.renderIntoDocument(
        <CheckboxField
          name="default_checkbox"
          options={['value1', 'value2']}
          onChange={(value) => {
            expect(value)
            .to.eql(['value1']);

            done();
          }}
        />
      );

      const firstCheckbox = React.findDOMNode(component).getElementsByTagName('input')[0];

      firstCheckbox.checked = true;
      TestUtils.Simulate.change(firstCheckbox);
    });
  });
});
