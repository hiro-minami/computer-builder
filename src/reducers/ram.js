// Actions
import { BUILD_RAM_MODEL } from "../actions";

const ram = (state = [], action) => {
    switch(action.type) {
        case BUILD_RAM_MODEL:
            const ramList = action.ramList;
            const amount = document.querySelector('#amount-of-ram').value;
            const brand = document.querySelector('#brand-of-ram').value;
            const filterList = ramList.filter(ram => ram.Brand === brand).filter(ram => ram.Model.match(/\dx/g).toString().substring(0,1) === amount);
            return filterList;
        default:
            return state;
    }
}

export default ram;