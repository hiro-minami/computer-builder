import {BUILD_PC} from "../actions";

const build = (state = {}, action) => {
    switch(action.type) {
        case BUILD_PC:
            return [];
        default:
            return state;
    }
};

export default build;