import React, {Component} from "react";
import Form from "./Form";
import List from "./List";


class App extends Component {
<<<<<<< HEAD
=======
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I am Batman. But with new mail and it is private.
          </a>
        </header>
      </div>
    );
  }
}
>>>>>>> master

    render () {
        return (
            
            <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
              <h2>Vehicles</h2>
              <List />
            </div>
      
            <div className="col-md-4 offset-md-1">
              <h2>Add a new vehicle</h2>
              <Form />
            </div>
      
          </div>
        );
    }
}
   
export default App;