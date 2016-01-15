import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Modal from 'overlays/modal';
import Sinon from 'sinon';

describe('Modal', () => {
  let callback = Sinon.spy();

  let props = {
    children: 'Child content',
    closeModal: callback,
    isOpen: false,
    contentColumns: 5
  }

  let component;
  let modal;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Modal {...props} />
    );
    modal = React.findDOMNode(component);
  })

  it('renders successfully', () => {
    TestUtils.isElement(component);
  });

  it('defaults to closed if no isOpen prop is passed', () => {
    expect(component.state.isOpen).to.be.false;
  });

  it('renders child content passed in through props', () => {
    expect(modal.innerHTML).to.contain(props.children);
  });

  it('fires the closeModal prop when clicked', () => {
    TestUtils.Simulate.click(modal);
    expect(callback.called).to.be.true;
  });

  describe('Open Modal', () => {
    let callback = Sinon.spy();

    let componentOpen;
    beforeEach(() => {
      componentOpen = TestUtils.renderIntoDocument(
        <Modal {...props} isOpen={true} disableClickBackground={true}/>
      )
    });

    it('sets the isOpen state to true if the isOpen prop is true', () => {
      expect(componentOpen.state.isOpen).to.be.true;
    });

    it('adds the correct column class', () => {
      let element = TestUtils.findRenderedDOMComponentWithClass(componentOpen, 'col-5');
      expect(element).to.exist;
    });


    it('does not fire the closeModal prop when disableClickBackground prop is true', () => {
      TestUtils.Simulate.click(modal);
      expect(callback.called).to.be.false;
    });
  });

});
