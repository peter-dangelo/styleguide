import React from 'react';
import Styleguide from '../styleguide';
import PropsTable from '../style_guide_components/props-table';
import Modal from '../components/modal/modal';

let D = React.DOM;

export default React.createClass({

  displayName: "ModalsPage",

  // set a prompt component to nest within the button.  This is very flexible. Maybe too flexible?
  promptContentExample1() {
    return <span className="flex flex-center">
        <span className="icon-plane mr1" />
        <span>{"Go for a plane ride"}</span>
      </span>
  },

  // or just pass in some text
  promptContentExample2() {
    return 'Click me!'
  },


  render() {


    return <Styleguide title="Modals">
      <div title="Modals" description="The modal styles for Namely">

        <p>Wrap a component inside the modal component.</p>

        <PropsTable rows={
          [
            {
              'prop':'prompt',
              'description':'sets the button prompt'
            },
            {
              'prop':'contentColumnWidth',
              'description':'sets the width of the content container with columns. Default: 9'
            },
            {
              'prop':'isOpen',
              'description':'automatically opens the modal when the modal button renders. Sets modal-background\'s inital state to isOpen:true. Default: false'
            }
          ]
        }/>

        <hr />

        <Modal prompt={this.promptContentExample1()}>
          <h3 className="mb2">{"I'm a modal!"}</h3>
          <hr className="mt0" />
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut erat vulputate ultricies ac in turpis. Curabitur mollis quis erat ut sodales. Sed ut pellentesque mauris. Donec lectus augue, sodales ut diam et, consequat condimentum metus. Sed faucibus congue mi. Pellentesque eu pharetra est."}</p>
        </Modal>

        <hr />

        <Modal prompt={this.promptContentExample2()} contentColumnWidth="3">
          <div>{"I'm a 3-column modal!"}</div>
          <hr />
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante ut erat vulputate ultricies ac in turpis. Curabitur mollis quis erat ut sodales. Sed ut pellentesque mauris. Donec lectus augue, sodales ut diam et, consequat condimentum metus. Sed faucibus congue mi. Pellentesque eu pharetra est."}</p>
        </Modal>

      </div>
    </Styleguide>
  }
});


