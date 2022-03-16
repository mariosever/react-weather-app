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
        humidity: '',
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
              humidity: res.data.main.humidity,
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

        <div className="wrapper">

          <header className="App-header">
            <SearchBar 
              location={this.state.location} 
              inputChange={(e) => this.onInputChange(e)} 
              formSubmitted={() => this.onFormSubmit()}
            />
          </header>

          <div className="Weather-info">
            <CurrentWeather 
              name={this.state.name}
              currentTemperature={this.state.temp} 
              humidity={this.state.humidity}
              feelsLike={this.state.feelsLike}
              description={this.state.description}
              icon={this.state.icon}
            />  
          </div>

        </div>
      </div>
    );
  }

}

export default App;
