import 'node-fetch'

export default (url, callback) => {
  fetch(url)
    .then( (res) => {
      let resJson = res.json();
      return resJson;
    })
    .then( (json) => {
      callback(json);
    });
}
