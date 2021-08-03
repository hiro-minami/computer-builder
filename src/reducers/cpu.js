import {BUILD_CPU_MODEL} from "../actions";

const cpu = (state = [], action) => {
    switch(action.type) {
        case BUILD_CPU_MODEL:
            console.log(state);
            const brand = document.querySelector('#brand-of-cpu').value;
            const filterList = state.filter(cpu => cpu.Brand === brand).map(element => element.Model);
            return filterList;
        default:
            return state;
    }
}

export default cpu;