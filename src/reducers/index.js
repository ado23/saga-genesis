import {ADD_VEHICLE, DELETE_VEHICLE} from '../constants/index';

const initialState = {
    vehicles: []
}

function rootReducer (state = initialState, action) {

    switch (action.type) {

        case ADD_VEHICLE: 
        return {
            ...state,
            vehicles: [...state.vehicles, action.payload]
        }

       /* case DELETE_VEHICLE:
        return {
            ...state,
            vehicles: state.vehicles.filter((id), id.title !== action.payload)
        }*/

        default: 
        return state;
    }
}

export default rootReducer;