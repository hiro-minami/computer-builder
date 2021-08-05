import { BUILD_STORAGE_BRAND, BUILD_STORAGE_MODEL, BUILD_STORAGE_SIZE } from "../actions";

const ssd = (state = {}, action) => {
    switch(action.type) {
        case BUILD_STORAGE_SIZE:
            return {size: action.sizeList, brand: [], model: []};

        case BUILD_STORAGE_BRAND:
            return {size: action.sizeList, brand: action.brandList, model: []};

        case BUILD_STORAGE_MODEL:
            const newState = {size: action.sizeList, brand: action.brandList, model: []};
            const brand = document.querySelector('#brand-of-storage').value;
            const size = document.querySelector('#size-of-storage').value;
            const filterList = action.modelList.filter(storage => storage.Brand === brand).filter(storage => storage.Model.includes(size));
            newState.model = filterList;
            return newState;

        default:
            return state;
    }
}

export default ssd;