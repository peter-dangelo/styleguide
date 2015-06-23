import React from 'react';
import Styleguide from '../styleguide';
import Modal from '../components/modal/modal';

let D = React.DOM;

export default React.createClass({
  displayName: "ModalsPage",

  render() {
    return <Styleguide title="Modals">
      <div title="Modals" description="The modal for Namely">
        <p>dasdadas</p>
        <Modal prompt="Launch default modal">
          <div>I&apos;m a modal!</div>
          <hr />
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


