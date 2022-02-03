import './App.css';
import React from 'react';
import SearchBar from './components/searchbar';
import CurrentWeather from './components/current-weather';
import { getCurrentWeather } from './apis/open-weather-api';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
        location: '',
        temp: '',
        feelsLike: '',
        description: '',
        icon: '',
        name: ''
    };
  }

  onInputChange(e) {
      this.setState({
          location: e.target.value
      });
  }

  onFormSubmit() {

      getCurrentWeather(this.state.location).then((res) => {
          this.setState({
              temp: res.data.main.temp,
              feelsLike: res.data.main.feels_like,
              description: res.data.weather[0].main,
              icon: res.data.weather[0].icon,
              name: res.data.name
          });
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            location={this.state.location} 
            inputChange={(e) => this.onInputChange(e)} 
            formSubmitted={() => this.onFormSubmit()}
          />
          <CurrentWeather 
            name={this.state.name}
            currentTemperature={this.state.temp} 
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
          />
        </header>
      </div>
    );
  }

}

export default App;
