import React from 'react';
import Styleguide from '../styleguide';
import Modal from '../components/modal/modal';

let D = React.DOM;

export default React.createClass({
  displayName: "ModalsPage",

  render() {
    return <Styleguide title="Modals">
      <div title="Modals" description="The modal styles for Namely">
        <p>Wrap a component inside the modal component:</p>

        <Modal prompt="Launch default modal">
          <h3 className="mb2">I&apos;m a modal!</h3>
          <hr className="mt0" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut erat vulputate ultricies ac in turpis. Curabitur mollis quis erat ut sodales. Sed ut pellentesque mauris. Donec lectus augue, sodales ut diam et, consequat condimentum metus. Sed faucibus congue mi. Pellentesque eu pharetra est.</p>
        </Modal>

        <hr />

        <Modal prompt="Launch 3-col modal" contentColumnWidth="3">
          <div>I&apos;m a 3-column modal!</div>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut erat vulputate ultricies ac in turpis. Curabitur mollis quis erat ut sodales. Sed ut pellentesque mauris. Donec lectus augue, sodales ut diam et, consequat condimentum metus. Sed faucibus congue mi. Pellentesque eu pharetra est.</p>
        </Modal>

      </div>
    </Styleguide>
  }
});


