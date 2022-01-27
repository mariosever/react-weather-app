import axios from 'axios';

const API_KEY = ''; // unijeti svoj API ključ sa openweathermap.org stranice

function getCurrentWeather(location) {

    return axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    
}

export {
    getCurrentWeather
}

