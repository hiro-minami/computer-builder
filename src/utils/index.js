export const getPartsInfo = () => {
    const partsInfo = {};
    const infoOfCpu = document.querySelector('#model-of-cpu');
    const infoOfGpu = document.querySelector('#model-of-gpu');
    const infoOfRam = document.querySelector('#model-of-ram');
    const infoOfStorage = document.querySelector('#model-of-storage');
    const isInputComplete = !infoOfCpu.value || !infoOfGpu.value || !infoOfRam.value || !infoOfStorage.value ? false : true;

    if (isInputComplete) {
        partsInfo.benchmarkOfCpu = infoOfCpu.value;
        partsInfo.benchmarkOfGpu = infoOfGpu.value;
        partsInfo.benchmarkOfRam = infoOfRam.value;
        partsInfo.benchmarkOfStorage = infoOfStorage.value;
    }
    
    partsInfo.isInputComplete = isInputComplete;
    return partsInfo;
}