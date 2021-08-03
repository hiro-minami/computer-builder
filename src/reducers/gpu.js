import {BUILD_GPU_MODEL} from "../actions";

const gpu = (state = {}, action) => {
    switch(action.type) {
        case BUILD_GPU_MODEL:
            return [];
        default:
            return state;
    }
}

export default gpu;