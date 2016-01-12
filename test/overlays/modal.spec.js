import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Modal from 'overlays/modal';

describe('Modal', () => {
  let props = {
    zIndex: 1000,
    contentColumns: 9,
    contentHeight: 100,
    contentMinHeight: 50,
    disableClickBackground: false,
    closeModal: false,
    isOpen: true
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

  });

});
