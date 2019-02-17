import React, {Component} from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addVehicle } from "../actions/index";

function InputData (props) {
 return (
    <form onSubmit = {props.handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Title</label>
            <input
            type="text"
            className="form-control"
            id="title"
            value={props.title}
            onChange = {props.handleChange}
            /> 
            </div>
        <button
        type="submit"
        className="btn btn-success btn-lg"> 
        DODAJ
        </button>
    </form>
 );
}

class ConnectedForm extends Component {

    constructor (){
        super();

        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addVehicle({title}, id);
        this.setState({title: ""});
    }

    handleChange (event){
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    render () {
        return (
            
           <InputData 
           handleChange = {this.handleChange}
           handleSubmit = {this.handleSubmit}
           title        = {this.state.title}
           />
        );
    }
}

const Form = connect(null,  {addVehicle} )(ConnectedForm);
export default Form;