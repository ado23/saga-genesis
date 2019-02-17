import {ADD_VEHICLE, DELETE_VEHICLE} from '../constants/index';

export function addVehicle (payload) {
    return {
        type: ADD_VEHICLE,
        payload
    }
}

export function deleteVehicle(payload) {
    return {
        type: DELETE_VEHICLE,
        payload
    }
}