import {BUILD_GPU_MODEL} from "../actions";

const gpu = (state = {}, action) => {
    switch(action.type) {
        case BUILD_GPU_MODEL:
            const gpuList = action.gpuList;
            console.log(gpuList);
            const brand = document.querySelector('#brand-of-gpu').value;
            console.log(brand);
            const filterList = gpuList.filter(gpu => gpu.Brand === brand);
            return filterList;
        default:
            return state;
    }
}

export default gpu;