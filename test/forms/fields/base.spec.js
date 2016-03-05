import { expect } from 'chai';
import Sinon from 'sinon';
import TestUtils, { Simulate } from 'react/lib/ReactTestUtils';
import React from 'react';
import Radio from 'forms/fields/radio';

describe('Base', () => {
  let sandbox;
  beforeEach(() => sandbox = Sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  describe('refs.*.value()', () => {
    it('updates to the field value come through defaultValue', () => {
      class Example extends React.Component {
        constructor(props) {
          super(props);
          this.render = this.render.bind(this);
          this.state = {};
        }
        render() {
          return (
            <Radio
              options={{
                0: "yearly",
                1: "hourly"
              }}
              name="hourly"
              ref="hourly"
              key={this.state.dynamicValue}
              defaultValue={this.state.dynamicValue}
            />
          );
        }
      }

      let component = TestUtils.renderIntoDocument(<Example />);
      expect(component.refs.hourly.value()).to.be.undefined;
      component.setState({ dynamicValue: 1 });
      expect(component.refs.hourly.value()).to.eql(1);
    });
  });

  describe('onChange', () => {
    const renderComponent = (givenHandler) =>
      TestUtils.renderIntoDocument(
        <Radio
          options={{
            0: "Yearly",
            1: "Hourly"
          }}
          name="hourly"
          defaultValue={0}
          onChange={givenHandler}
        />
      );

    it('calls the given handler on change', () => {
      let handler = sandbox.spy();
      let component = renderComponent(handler);
      let inputs = (givenComponent) =>
        TestUtils.scryRenderedDOMComponentsWithTag(givenComponent, 'input');
      Simulate.change(inputs(component)[1]);
      expect(
        handler.called
      ).to.be.true;
    });
  });
});
