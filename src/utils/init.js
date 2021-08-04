const Init = function() {
    const url = "https://api.recursionist.io/builder/computers?type=";
    const parts = {
      'cpu': [],
      'gpu': [],
      'ram': [],
      'hdd': [],
      'ssd': []
    };
  
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
}();
console.log(Init);

export default Init;