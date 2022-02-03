import axios from 'axios';

const API_KEY = 'a584720c43c130d020ae58d96440565e';

function getCurrentWeather(location) {

    return axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}&lang=hr`
    );
    
}

export {
    getCurrentWeather
}

