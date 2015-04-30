import React from 'react';
import Styleguide from '../styleguide';

let D = React.DOM;

export default React.createClass({
  displayName: "TablesPage",

  render() {
    return <Styleguide>
      <div title="Paragraph" description="The paragraph styles for Namely">
        <table>
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>some</td>
              <td>data</td>
              <td>here</td>
            </tr>
            <tr>
              <td>more</td>
              <td>stuff</td>
              <td>here</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Styleguide>
  }


});


