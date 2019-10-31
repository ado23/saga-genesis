import React, {Component} from "react";
import Form from "./Form";
import List from "./List";


class App extends Component {

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