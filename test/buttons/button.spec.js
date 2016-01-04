import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Button from 'buttons/button';
import Sinon from 'sinon';

describe('Button', () => {

  it('expects the button-link class if the link prop is true', () => {
    let button = TestUtils.renderIntoDocument(<Button link={true}/>)
    let options = TestUtils.scryRenderedDOMComponentsWithClass(button, 'button-link')
    expect(options.length).to.equal(1)
  });

  it('renders an icon if icon exists', () => {
    let button = TestUtils.renderIntoDocument(<Button icon={'pencil'}/>)
    let options = TestUtils.scryRenderedDOMComponentsWithClass(button, 'icon-pencil')
    expect(options.length).to.equal(1)
  });

});
