import axios from 'axios';

const API_KEY = 'add your api';

function getCurrentWeather(location) {

    return axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}&lang=hr`
    );
    
}

export {
    getCurrentWeather
}

