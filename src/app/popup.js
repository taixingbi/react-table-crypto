import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class App_ extends Component {

  constructor(props) {
    super(props);
    console.log("props", props);
 
  } 

  render() {

    return (
      <div>
        <Popup trigger={<button> Note</button>} position="left center">
          <div>
            
            <form onSubmit= {this.handleSubmit} >
              <label>
                edit
                <input type="text" name="name"  onChange={ this.handleNameChange}/>    
              </label>

              <input type="submit"/>
            </form>

          </div>
        </Popup>
      </div>
    )
  }
}

export default App_;

