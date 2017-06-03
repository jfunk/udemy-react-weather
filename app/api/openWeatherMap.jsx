var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ea87b0dafcf01610500cbd46237637d0&units=imperial';
// My openweathermap API key
//ea87b0dafcf01610500cbd46237637d0

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(function (response) {
        return response.data.main.temp;
      })
      .catch(function (error) {
        throw error
      });
  }
}
