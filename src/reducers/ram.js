import {BUILD_RAM_MODEL} from "../actions";

const ram = (state = {}, action) => {
    switch(action.type) {
        case BUILD_RAM_MODEL:
            return [];
        default:
            return state;
    }
}

export default ram;