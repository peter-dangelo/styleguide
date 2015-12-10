import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import SimpleSelect from 'forms/fields/select/simple-select';
import DummyForTest from 'dummy-for-test';

describe('SimpleSelect', () => {

  it('expects one option element for each option given in an options array', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect options={['one','two']}/>)
    simple_select.setState({show_options: true})
    let options = TestUtils.scryRenderedDOMComponentsWithClass(simple_select, 'simple-select-option')
    expect(options.length).to.equal(2)
  });

  it('expects one option element for each option given in an options object', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect options={{123: 'one', 456: 'two'}}/>)
    simple_select.setState({show_options: true})
    let options = TestUtils.scryRenderedDOMComponentsWithClass(simple_select, 'simple-select-option')
    expect(options.length).to.equal(2)
  });

  it('expects an empty option if includeBlank is true', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect includeBlank={true} />)
    simple_select.setState({show_options: true})
    let option = TestUtils.scryRenderedDOMComponentsWithClass(simple_select, 'simple-select-option-empty')
    expect(option).to.exist
  });

  it('expect this.state.show_options to be true when value is clicked', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect />)
    TestUtils.Simulate.click(simple_select.refs.simpleSelectValue)
    expect(simple_select.state.show_options).to.be.true
  });

  it('expects the value to change to the option that was clicked', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect options={['foo','bar']} value={'foo'}/>)
    simple_select.setState({show_options: true})
    let options = TestUtils.scryRenderedDOMComponentsWithClass(simple_select, 'simple-select-option');
    TestUtils.Simulate.click(options[1])
    expect(simple_select.state.value).to.equal('bar')
  });

  it('sets the value to null when empty option is clicked', () => {
    let simple_select = TestUtils.renderIntoDocument(<SimpleSelect includeBlank={true} options={['foo','bar']} value={'foo'}/>)
    simple_select.setState({show_options: true})
    let options = TestUtils.scryRenderedDOMComponentsWithClass(simple_select, 'simple-select-option');
    TestUtils.Simulate.click(options[0])
    expect(simple_select.state.value).to.be.null
  });

});
