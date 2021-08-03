import {BUILD_SSD_MODEL} from "../actions";

const ssd = (state = {}, action) => {
    switch(action.type) {
        case BUILD_SSD_MODEL:
            return [];
        default:
            return state;
    }
}

export default ssd;