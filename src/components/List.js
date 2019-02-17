import React, {Component} from "react";
import { connect } from "react-redux";
import { deleteVehicle } from "../actions/index";

function ListOfArticles (props) {

    return (
        <ul className="list-group list-group-flush" >
            {props.vehicles.map(el => (
                <li className="list-group-item" key={el.title}>  {el.title}
                    <button 
                    className="btn btn-danger btn-sm" 
                    type="button"
                    onClick={() => props.deleter(el.title) }> 
                    OBRIŠI
                    </button>
            </li>
            ))}
        </ul>
    )
}

class ConnectedList extends Component {

    render () {
        return ( <ListOfArticles 
                deleter = {this.props.deleteVehicle}
                vehicles = {this.props.vehicles}
                />
                )
    }
}

const mapStateToProps = (state) => {
    return {vehicles: state.vehicles};
};

const List = connect (mapStateToProps, { deleteVehicle })(ConnectedList);
export default List;