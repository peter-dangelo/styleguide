import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Moment from 'moment';
import DateField from 'forms/fields/date/date';

describe('DateField', () => {

  const renderComponent = (givenProps) => TestUtils.renderIntoDocument(
    <DateField {...givenProps} />
  );

  let props;
  beforeEach(() => {
    props = { dateFormat: 'MMM D, YYYY' };
  });

  it('renders successfully', () => {
    let component = renderComponent(props);
    TestUtils.findRenderedDOMComponentWithClass(component, 'date-field');
  });

  describe('refs.*.value()', () => {
    it('is set the date string in the given dateFormat when clicked through the UI', (done) => {
      class Example extends React.Component {
        constructor(props) {
          super(props);
          this.render = this.render.bind(this);
          this.state = {};
        }
        render() {
          return (
            <DateField
              name="startDate"
              ref="startDate"
              label="Start Date"
              dateFormat="MM/DD/YYYY"
              key={this.state.startDate}
              defaultValue={this.state.startDate}
            />
          );
        }
      }

      let component = TestUtils.renderIntoDocument(<Example />);

      let overlay = React.findDOMNode(component.refs.startDate.refs.overlay);
      TestUtils.Simulate.click(overlay);

      let firstDay = TestUtils.scryRenderedDOMComponentsWithClass(
        component, 'day'
      )[0];
      setTimeout(() => {
        try {
          // click the first day of this month
          const dayNode = TestUtils.scryRenderedDOMComponentsWithTag(firstDay, 'div')[1];
          TestUtils.Simulate.click(
            dayNode
          );
          // desired value is set
          expect(component.refs.startDate.value()).to.eql(
            Moment().startOf('month').format('MM/DD/YYYY')
          );
          // overlay closes
          expect(
            TestUtils.scryRenderedDOMComponentsWithClass(
              component, 'day'
            ).length
          ).to.eql(0);
          done();
        } catch (e) {
          done(e);
        }
      }, 0);
    });
  });

  describe('typing input', () => {
    it('works with "MMM D, YYYY" format' , () => {
      let date = 'May 5, 2016';
      let dateField = renderComponent(props);

      let dateInput = TestUtils.findRenderedDOMComponentWithTag(dateField, 'input');
      let inputNode = React.findDOMNode(dateInput);

      let icon = TestUtils.findRenderedDOMComponentWithClass(dateField, 'icon-calendar');
      let iconNode = React.findDOMNode(icon);
      TestUtils.Simulate.click(iconNode);  

      let picker = TestUtils.findRenderedDOMComponentWithClass(dateField, 'datepicker');

      inputNode.value = date;
      TestUtils.Simulate.change(inputNode);

      let pickedDay = TestUtils.findRenderedDOMComponentWithClass(picker, 'bc-blue-50');
      let pickedMonthYear = TestUtils.findRenderedDOMComponentWithClass(picker, 'monthpicker');

      expect(
        React.findDOMNode(pickedDay).children.item(0).textContent
      ).to.equal('5');

      expect(
        React.findDOMNode(pickedMonthYear).children.item(1).textContent
      ).to.equal('May 2016');

      expect(
        dateField.value()
      ).to.equal(date);
    });

    it('works with "MM/DD/YYYY" format' , () => {
      let date = '05/05/2016';

      props.dateFormat = 'MM/DD/YYYY';
      let dateField = renderComponent(props);

      let dateInput = TestUtils.findRenderedDOMComponentWithTag(dateField, 'input');
      let inputNode = React.findDOMNode(dateInput);

      let icon = TestUtils.findRenderedDOMComponentWithClass(dateField, 'icon-calendar');
      let iconNode = React.findDOMNode(icon);
      TestUtils.Simulate.click(iconNode);  

      let picker = TestUtils.findRenderedDOMComponentWithClass(dateField, 'datepicker');

      inputNode.value = date;
      TestUtils.Simulate.change(inputNode);

      let pickedDay = TestUtils.findRenderedDOMComponentWithClass(picker, 'bc-blue-50');
      let pickedMonthYear = TestUtils.findRenderedDOMComponentWithClass(picker, 'monthpicker');

      expect(
        React.findDOMNode(pickedDay).children.item(0).textContent
      ).to.equal('5');

      expect(
        React.findDOMNode(pickedMonthYear).children.item(1).textContent
      ).to.equal('May 2016');

      expect(
        dateField.value()
      ).to.equal(date);
    });

    it('works with "DD/MM/YYYY" format' , () => {
      let date = '05/05/2016';

      props.dateFormat = 'DD/MM/YYYY';
      let dateField = renderComponent(props);

      let dateInput = TestUtils.findRenderedDOMComponentWithTag(dateField, 'input');
      let inputNode = React.findDOMNode(dateInput);

      let icon = TestUtils.findRenderedDOMComponentWithClass(dateField, 'icon-calendar');
      let iconNode = React.findDOMNode(icon);
      TestUtils.Simulate.click(iconNode);  

      let picker = TestUtils.findRenderedDOMComponentWithClass(dateField, 'datepicker');

      inputNode.value = date;
      TestUtils.Simulate.change(inputNode);

      let pickedDay = TestUtils.findRenderedDOMComponentWithClass(picker, 'bc-blue-50');
      let pickedMonthYear = TestUtils.findRenderedDOMComponentWithClass(picker, 'monthpicker');

      expect(
        React.findDOMNode(pickedDay).children.item(0).textContent
      ).to.equal('5');

      expect(
        React.findDOMNode(pickedMonthYear).children.item(1).textContent
      ).to.equal('May 2016');

      expect(
        dateField.value()
      ).to.equal(date);
    });

    it('works with "YYYY/MM/DD" format' , () => {
      let date = '2016/05/05';

      props.dateFormat = 'YYYY/MM/DD';
      let dateField = renderComponent(props);

      let dateInput = TestUtils.findRenderedDOMComponentWithTag(dateField, 'input');
      let inputNode = React.findDOMNode(dateInput);

      let icon = TestUtils.findRenderedDOMComponentWithClass(dateField, 'icon-calendar');
      let iconNode = React.findDOMNode(icon);
      TestUtils.Simulate.click(iconNode);  

      let picker = TestUtils.findRenderedDOMComponentWithClass(dateField, 'datepicker');

      inputNode.value = date;
      TestUtils.Simulate.change(inputNode);

      let pickedDay = TestUtils.findRenderedDOMComponentWithClass(picker, 'bc-blue-50');
      let pickedMonthYear = TestUtils.findRenderedDOMComponentWithClass(picker, 'monthpicker');

      expect(
        React.findDOMNode(pickedDay).children.item(0).textContent
      ).to.equal('5');

      expect(
        React.findDOMNode(pickedMonthYear).children.item(1).textContent
      ).to.equal('May 2016');

      expect(
        dateField.value()
      ).to.equal(date);
    });
  });

  describe('date can be removed', () => {
    it('returns an empty string', () => {
      let date = 'May 5, 2016';

      props.defaultValue = date;
      let dateField = renderComponent(props);

      let dateInput = TestUtils.findRenderedDOMComponentWithTag(dateField, 'input');
      let inputNode = React.findDOMNode(dateInput);

      inputNode.value = '';
      TestUtils.Simulate.change(inputNode);

      expect(
        dateField.value()
      ).to.equal('');
    });
  });
});
