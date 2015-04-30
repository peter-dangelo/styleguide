import React from 'react';
import Styleguide from '../styleguide';
import Button from '../components/button';

export default React.createClass({
  displayName: "ButtonsPage",

  render() {
    return <Styleguide title="Button Styles">

      <div title="Base" description="The button styles for Namely app">
        <Button label="Base" />
      </div>

      <div title="Types">
        <Button label=".button" />
        <br />
        <br />
        <Button label=".button-secondary" type="secondary" />
        <br />
        <br />
        <Button label=".button-danger" type="danger" />
        <br />
        <br />
        <Button label=".button:disabled" disabled={ true } />
      </div>

      <div title="Sizes">
        <Button label="Default Size" />
        <br />
        <br />
        <Button label=".button-sm" size="sm" />
        <br />
        <br />
        <Button label=".button-sm.button-danger" size="sm" type="danger" />
        <br />
        <br />
        <Button label=".button-sm:disabled" size="sm" disabled={ true } />
      </div>

      <div title="Links">
        <Button label=".button-link" link={ true } />
        <br />
        <br />
        <Button label=".button-link.button-secondary" type="secondary" link={ true } />
        <br />
        <br />
        <Button label=".button-link.button-danger" type="danger" link={ true } />
        <br />
        <br />
        <Button label=".button-link:disabled" link={ true } disabled={ true } />
        <br />
        <br />
        <Button label=".button-link.button-sm" size="sm" link={ true } />
        <br />
        <br />
        <Button label=".button-link.button-sm.button-secondary" size="sm" type="secondary" link={ true } />
      </div>

      <div title="Directions">
        <Button label=".button-previous" type="previous" />
        <br />
        <br />
        <Button label=".button-next" type="next" />
        <br />
        <br />
        <Button label=".button-previous:disabled" type="previous" disabled={ true } />
        <br />
        <br />
        <Button label=".button-next:disabled" type="next" disabled={ true } />
      </div>

    </Styleguide>
  }
});
