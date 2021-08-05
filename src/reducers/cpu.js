import {BUILD_CPU_MODEL} from "../actions";

const cpu = (state = [], action) => {
    switch(action.type) {
        case BUILD_CPU_MODEL:
            const cpuList = action.cpuList;
            const brand = document.querySelector('#brand-of-cpu').value;
            const filterList = cpuList.filter(cpu => cpu.Brand === brand);
            return filterList;

        default:
            return state;
    }
}

export default cpu;