const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0857a8f53453052498569df06722c3d5&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
