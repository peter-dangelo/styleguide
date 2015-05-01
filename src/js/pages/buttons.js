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
        <Button label=".button" extraClass="mr3" />
        <Button label=".button-secondary" type="secondary" extraClass="mr3" />
        <Button label=".button-danger" type="danger" extraClass="mr3" />
        <Button label=".button:disabled" disabled={ true } />
      </div>

      <div title="Sizes">
        <Button label="Default Size" extraClass="mr3" />
        <Button label=".button-sm" size="sm" extraClass="mr3" />
        <Button label=".button-sm.button-danger" size="sm" type="danger" extraClass="mr3" />
        <Button label=".button-sm:disabled" size="sm" disabled={ true } />
      </div>

      <div title="Links">
        <Button label=".button-link" link={ true } extraClass="mr3" />
        <Button label=".button-link.button-secondary" type="secondary" link={ true } extraClass="mr3" />
        <Button label=".button-link.button-danger" type="danger" link={ true } extraClass="mr3" />
        <Button label=".button-link:disabled" link={ true } disabled={ true } extraClass="mr3" />
        <Button label=".button-link.button-sm" size="sm" link={ true } extraClass="mr3" />
        <Button label=".button-link.button-sm.button-secondary" size="sm" type="secondary" link={ true } />
      </div>

      <div title="Directions">
        <Button label=".button-previous" type="previous" extraClass="mr3" />
        <Button label=".button-next" type="next" extraClass="mr3" />
        <Button label=".button-previous:disabled" type="previous" disabled={ true } extraClass="mr3" />
        <Button label=".button-next:disabled" type="next" disabled={ true } />
      </div>

    </Styleguide>
  }
});
