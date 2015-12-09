import React from 'react';

export default React.createClass({

  displayName: 'DummyForTest',

  render() {
    return(
      <div>
        <span>Dummy For Test</span>
        <button className='my-button' onClick={this.props.onClick}/>
      </div>
    );
  }

});
