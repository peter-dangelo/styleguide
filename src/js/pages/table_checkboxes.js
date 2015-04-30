import React from 'react';
export default React.createClass({
  displayName: 'TableCheckboxes',
  render() {
    return <table>
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
  }
});
