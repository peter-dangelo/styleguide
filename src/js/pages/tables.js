import React from 'react';
import Styleguide from '../styleguide';
import TableBasic from './table_basic';
import TableCheckboxes from './table_checkboxes';

let D = React.DOM;

export default React.createClass({
  displayName: "TablesPage",

  render() {
    return <Styleguide>
      <div title="Tables" description="The table styles for Namely">
        <h3>Basic Table</h3>

        <TableBasic />

        <p className="bg-orange">
          Todo: Utility to center in a td?
        </p>

        <hr />

        <h3>Checkbox table</h3>

        <TableCheckboxes />

        <p className="bg-orange">
          Todo: Checkbox styles
        </p>
      </div>
    </Styleguide>
  }


});


