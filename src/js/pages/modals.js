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



  getInitialState() {
    return {
      modalIsOpen: false
    }
  },

  openModal(){
    this.setState({modalIsOpen: true});
  },

  closeModal(){
    this.setState({modalIsOpen: false});
  },

  render() {



    return <Styleguide title="Modals">
      <div title="Modals" description="The modal styles for Namely">

        <p>Wrap a component inside the modal component.</p>

        <PropsTable rows={
          [
            {
              'prop':'contentColumns',
              'description':'sets the width of the content container with columns. Default: 9'
            },
            {
              'prop':'isOpen',
              'description':'automatically opens the modal when the modal button renders. Sets modal-background\'s inital state to isOpen:true. Default: false'
            }
          ]
        }/>

        <hr />

        <button onClick={this.openModal}>Just a button</button>

        <Modal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} contentColumns={6}>
          <h4>This is a modal</h4>
          <p>{"You can pass in some JSX, component, etc."}</p>
          <hr />
          <button onClick={this.closeModal}>{"Close"}</button>
        </Modal>

      </div>
    </Styleguide>
  }
});


