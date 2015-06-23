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
        <Modal prompt="Click me!">
          <div>I&apos;m a modal!</div>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut erat vulputate ultricies ac in turpis. Curabitur mollis quis erat ut sodales. Sed ut pellentesque mauris. Donec lectus augue, sodales ut diam et, consequat condimentum metus. Sed faucibus congue mi. Pellentesque eu pharetra est.</p>
        </Modal>

      </div>
    </Styleguide>
    // return React.createElement(Styleguide, {
    //   title: "Modal Styles"
    // }, React.createElement("div", {
    //   title: "Paragraph",
    //   description: "The paragraph styles for Namely app",
    //   example: 'D.p({}, "Some sample text for this paragraph component")'
    // }, React.createElement("p", {}, "Some sample text for this paragraph component"))
    // );
  }
});


