const init = () => {
    const url = "https://api.recursionist.io/builder/computers?type=";
    const partsList = ['cpu', 'gpu', 'ram', 'hdd', 'ssd'];
    const parts = {
      'cpu': [],
      'gpu': [],
      'ram': [],
      'hdd': [],
      'ssd': []
    };
    let cpuList = [];
    let gpuList = [];
    let ramList = [];
    let hddList = [];
    let ssdList = [];

    partsList.forEach(key => {
      fetch(url+key)
      .then(response => response.json())
        .then(data => getData(data, key));
    })
  
    for(let key in parts) {
      fetch(url+key)
        .then(response => response.json())
          .then(data => getData(data, key));
    }
  
    const getData = (data, key) => {
      data.forEach(element => {
        parts[key].push(element);
      });
    }

    return parts;
};

export default init;