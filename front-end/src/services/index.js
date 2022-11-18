import addValet from "./addValet";
import userRegister from "./userRegister";
import addLocation from './addLocation';
import getAllLocations from './getAllLocations';
import getUserLocation from "./getUserLocation";
import getUser from "./getUser";
import userLogin from "./userLogin";
import getUserValets from "./getUserValets";
import addLocationToValet from "./addLocationToValet";
import addValetToLocation from "./addValetToLocation";
import deleteLocation from './deleteLocation';
import deleteValet from "./deleteValet";
import getLocationValets from "./getLocationValets";
import getValetLocations from "./getValetLocations";
import getOneValet from "./getOneValet";
const services = {
    userRegister,
    userLogin,
    getUser,
    addValet,
    addLocation,
    getAllLocations,
    getUserLocation,
    getUserValets,
    addLocationToValet,
    addValetToLocation,
    deleteLocation,
    deleteValet,
    getLocationValets,
    getValetLocations,
    getOneValet


}

export default services