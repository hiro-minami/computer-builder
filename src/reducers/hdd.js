import {BUILD_HDD_MODEL} from "../actions";

const hdd = (state = {}, action) => {
    switch(action.type) {
        case BUILD_HDD_MODEL:
            return [];
        default:
            return state;
    }
}

export default hdd;