import { URL } from "../constants";

const getCpu = async() => {
    
    const gpuList = [];
  
    const getData = (data) => {
        data.forEach(element => {
            const gpu = {
                'brand': element.Brand,
                'model': element.Model,
                'benchmark': element.Benchmark
            };
            gpuList.push(gpu);
        });
    }

    await (fetch(URL+'gpu')
    .then(response => response.json())
      .then(data => getData(data)));
    
    return gpuList;
};

export default getCpu;