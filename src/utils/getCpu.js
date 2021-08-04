import { URL } from "../constants";

const getCpu = async() => {
    
    const cpuList = [];
  
    const getData = (data) => {
        data.forEach(element => {
            const cpu = {
                'brand': element.Brand,
                'model': element.Model,
                'benchmark': element.Benchmark
            };
            cpuList.push(cpu);
        });
    }

    await (fetch(URL+'cpu')
    .then(response => response.json())
      .then(data => getData(data)));
    
    return cpuList;
};

export default getCpu;