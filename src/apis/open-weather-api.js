import axios from 'axios';

function getCurrentWeather(location) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a584720c43c130d020ae58d96440565e&lang=hr`
    );
}

function getLocationData(lat, long) {
    return axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=e2fab8c66d544337ab683010f85d4dc7&q=${lat}+${long}`
    );
}

export {
    getCurrentWeather,
    getLocationData
}

