// Actions
import { BUILD_PC, DELETE_PC, DELETE_ALL_PC } from "../actions";

const result = (state = {}, action) => {
    switch(action.type) {
        case BUILD_PC:
            const benchmarkOfCpu = action.parts.benchmarkOfCpu;
            const benchmarkOfGpu = action.parts.benchmarkOfGpu;
            const benchmarkOfRam = action.parts.benchmarkOfRam;
            const benchmarkOfStorage = action.parts.benchmarkOfStorage;
            const optionalSpec = document.querySelector('#type-of-storage').value === "SSD" ? 0.1 : 0.025 ;

            const benchmarkOfCpuForWorking = Math.floor(+benchmarkOfCpu * 0.6);
            const benchmarkOfGpuForWorking = Math.floor(+benchmarkOfGpu * 0.25);
            const benchmarkOfRamForWorking = Math.floor(+benchmarkOfRam * 0.1);
            const benchmarkOfStorageForWorking = Math.floor(+benchmarkOfStorage * 0.05);
            const resultOfWorking = benchmarkOfCpuForWorking + benchmarkOfGpuForWorking + benchmarkOfRamForWorking + benchmarkOfStorageForWorking;

            const benchmarkOfCpuForGaming = Math.floor(+benchmarkOfCpu * 0.25);
            const benchmarkOfGpuForGaming = Math.floor(+benchmarkOfGpu * 0.6);
            const benchmarkOfRamForGaming = Math.floor(+benchmarkOfRam * 0.125);
            const benchmarkOfStorageForGaming = Math.floor(+benchmarkOfStorage * optionalSpec);
            const resultOfGaming = benchmarkOfCpuForGaming + benchmarkOfGpuForGaming + benchmarkOfRamForGaming + benchmarkOfStorageForGaming;

            const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
            const result = {id, benchmarkOfCpu, benchmarkOfGpu, benchmarkOfRam, benchmarkOfStorage, resultOfWorking, resultOfGaming};

            return [...state, result];

        case DELETE_PC:
            return state.filter(result => result.id !== action.id);
        
        case DELETE_ALL_PC:
            return [];

        default:
            return state;
    }
};

export default result;