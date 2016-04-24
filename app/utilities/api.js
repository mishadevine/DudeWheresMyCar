var api = {
  addPin(pin){
    var url = `https://dudewhersmycar.firebaseio.com/`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(pin)
    }).then((res) => res.json());
  },
  getPins(){
    var url = `https://dudewhersmycar.firebaseio.com/`;
    return fetch(url).then((res) => res.json());
  },
};

module.exports = api;
