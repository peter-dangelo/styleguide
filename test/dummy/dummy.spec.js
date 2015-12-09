import { expect } from 'chai';
import React from 'react';
import DummyForTest from 'dummy-for-test';
import TestUtils from 'react/lib/ReactTestUtils';

describe('dummy test suite', () => {

  it('expects the string Dummy For Test', () => {
    let dummy = TestUtils.renderIntoDocument(<DummyForTest />)
    let dummy_node = dummy.getDOMNode();
    expect(dummy_node.textContent).to.equal('Dummy For Test')
  });

});
