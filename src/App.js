import './App.css';
import React from 'react';
import SearchBar from './components/searchbar';
import CurrentWeather from './components/current-weather';
import { getCurrentWeather, getLocationData } from './apis/open-weather-api';


class App extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			location: 'Zagreb',
			temp: '',
			feelsLike: '',
			description: '',
			icon: '',
			name: 'Loading...'
		};
	}

	onInputChange(e) {
			this.setState({
				location: e.target.value
			});
	}

    componentDidMount() {
		navigator.geolocation.getCurrentPosition(async (pos) => {
            let data = await getLocationData(pos.coords.latitude, pos.coords.longitude);
			this.onFormSubmit(data.data.results[0].components.town);
        });
    }
	

	onFormSubmit(x) {
			getCurrentWeather(x || this.state.location).then((res) => {
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
			<div id="app">
				<CurrentWeather 
					name={this.state.name}
					currentTemperature={this.state.temp} 
					feelsLike={this.state.feelsLike}
					description={this.state.description}
					icon={this.state.icon}
				/>
				<div id="menu">
					<SearchBar 
						location={this.state.location} 
						inputChange={(e) => this.onInputChange(e)} 
						formSubmitted={() => this.onFormSubmit()}
					/>
				</div>
			</div>
		);
	}
}

export default App;
