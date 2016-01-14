import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Modal from 'overlays/modal';

describe('Modal', () => {
  let props = {
    isOpen: false,
    children: 'Child content'
  }

  let component;
  let modal;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Modal {...props} />
    );
    modal = React.findDOMNode(component);
  })

  it('should render successfully', () => {
    TestUtils.isElement(component);
  });

  it('defaults to closed if no isOpen prop is passed', () => {
    expect(component.state.isOpen).to.be.false;
  });

  it('renders child content passed in through props', () => {
    expect(modal.innerHTML).to.contain(props.children);
  })

  describe('Open Modal', () => {

  
  });

});
