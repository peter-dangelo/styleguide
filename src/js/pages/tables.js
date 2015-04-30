import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "TablesPage",

  renderBasicTable() {
    return <table>
      <thead>
        <tr className="secondary">
          <th></th>
          <th colSpan="3">Second tier header</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Status</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis dictum nulla, quis hendrerit felis. Suspendisse potenti</p></td>
          <td>here</td>
          <td><span className='yellow'>Pending</span></td>
          <td>here</td>
        </tr>
        <tr>
          <td>more</td>
          <td>stuff</td>
          <td><span className='green'>Approved</span></td>
          <td>here</td>
        </tr>
        <tr>
          <td>more</td>
          <td>stuff</td>
          <td><span className='orange'>Declined</span></td>
          <td>here</td>
        </tr>
      </tbody>
    </table>
  },

  renderCheckboxTable() {
    return <table>
          <thead>
            <tr>
              <th><input type="checkBox"></input></th>
              <th>Checkbox</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkBox"></input></td>
              <td><input type="checkBox"></input></td>
              <td>Suspendisse quis dictum nulla, quis hendrerit felis</td>
            </tr>
            <tr>
              <td><input type="checkBox"></input></td>
              <td><input type="checkBox" readOnly="true" checked="true"></input></td>
              <td>The second checkbox is checked and read-only.</td>
            </tr>
          </tbody>
        </table>
  },

  render() {
    return <Styleguide>
      <div title="Tables" description="The table styles for Namely">
        <h3>Basic Table</h3>
        { this.renderBasicTable() }
        <p className="bg-orange">
          Todo: Utility to center in a td?
        </p>
        {/* temporary hr to be replaced by styleguid hr */}
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        <h3>Checkbox table</h3>
        { this.renderCheckboxTable() }
        <p className="bg-orange">
          Todo: Checkbox styles
        </p>
      </div>
    </Styleguide>
  }


});


