import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "TablesPage",

  render() {
    return <Styleguide>
      <div title="Tables" description="The table styles for Namely">

        <h3>Basic Table</h3>

        <table>
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

        <hr />

        <h3>Checkbox table</h3>

        <table>
          <thead>
            <tr>
              <th className="center"><input type="checkBox"></input></th>
              <th className="center">Checkbox</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center"><input type="checkBox"></input></td>
              <td className="center"><input type="checkBox"></input></td>
              <td>Suspendisse quis dictum nulla, quis hendrerit felis</td>
            </tr>
            <tr>
              <td className="center"><input type="checkBox"></input></td>
              <td className="center"><input type="checkBox" readOnly="true" checked="true"></input></td>
              <td>The second checkbox is checked and read-only.</td>
            </tr>
          </tbody>
        </table>

        <p className="orange">Todo: Checkbox styles</p>

        <hr />

        <h3>Sortable Tables</h3>

        <p className="orange">Some temporary styles here.  Will change when arrows are available.</p>

        <table className="sortable">
          <thead>
            <tr>
              <th className="sortable-header">First <code className="language-css">.sortable-header</code></th>
              <th className="sortable-header">Last <code className="language-css">.sortable-header</code></th>
              <th className="sortable-header sorted desc">Star Date <code className="language-css">.sortable-header.sorted.desc</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Smith</td>
              <td>2014-01-01</td>
            </tr>
            <tr>
              <td>Chuck</td>
              <td>D</td>
              <td>2013-03-15</td>
            </tr>
            <tr>
              <td>Flava</td>
              <td>Flav</td>
              <td>2012-06-28</td>
            </tr>
          </tbody>
        </table>

        <hr/>

        <table className="sortable">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th className="sortable-header sorted desc disabled">Star Date <code className="language-css">.sortable-header.sorted.desc.disabled</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Smith</td>
              <td>2014-01-01</td>
            </tr>
            <tr>
              <td>Chuck</td>
              <td>D</td>
              <td>2013-03-15</td>
            </tr>
            <tr>
              <td>Flava</td>
              <td>Flav</td>
              <td>2012-06-28</td>
            </tr>
          </tbody>
        </table>

      </div>

    </Styleguide>

  }


});


