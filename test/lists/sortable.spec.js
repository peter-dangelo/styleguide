import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Sortable from 'lists/sortable';
import Sinon from 'sinon';

describe('Sortable', () => {
  it('renders', () => {
    let sortable = TestUtils.renderIntoDocument(
      <Sortable>
        <table>
          <thead>
            <tr>
              <th sortKey="name"><a href="#" className="block">First</a></th>
              <th><a href="#" className="block">Last</a></th>
              <th sortKey="date" active={true} order="desc"><a href="#" className="block">Start Date</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td name="john">John</td>
              <td>Smith</td>
              <td date={2014}>2014-01-01</td>
            </tr>
            <tr>
              <td name="chuck">Chuck</td>
              <td>D</td>
              <td date={2013}>2013-03-15</td>
            </tr>
            <tr>
              <td name="flava">Flava</td>
              <td>Flav</td>
              <td date={2012}>2012-06-28</td>
            </tr>
          </tbody>
        </table>
      </Sortable>
    );
  });
});
