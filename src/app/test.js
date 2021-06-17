import React, { Component } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log("props", props);
  //   this.state = {
  //     columns: columns,
  //     data: data,
  //   };
  // } 

  render() {

    return (
    <div>

      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>

    </div>
    );
  }
}

export default App;
