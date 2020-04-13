const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4824810da1d6bf955e08f5eb33efa869&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};