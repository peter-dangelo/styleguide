import React from 'react';
export default React.createClass({
  displayName: 'TableBasic',
  render() {
    return  <table>
      <thead>
        <tr className="secondary">
          <th></th>
          <th colSpan="3">Second tier header</th>
        </tr>
        <tr>
          <th>Name</th>
          <th className="center">Number</th>
          <th>Status</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis dictum nulla, quis hendrerit felis. Suspendisse potenti</p></td>
          <td className="center">4</td>
          <td><span className='yellow'>Pending</span></td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>more</td>
          <td className="center">150</td>
          <td><span className='green'>Approved</span></td>
          <td>ipsum</td>
        </tr>
        <tr>
          <td>more</td>
          <td className="center">0.2</td>
          <td><span className='orange'>Declined</span></td>
          <td>dolor</td>
        </tr>
      </tbody>
    </table>
  }
});
