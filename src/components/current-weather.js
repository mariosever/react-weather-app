import React from 'react';

class CurrentWeather extends React.Component {
    render() {

        const icon = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;

        return (
            <div className="current-weather">

                <div className="current-weather__temp">
                    <h3 className="current-weather__name">{this.props.name}</h3>
                    <p className="current-weather__temp">{this.props.currentTemperature} &#8451;</p>
                    <p className="current-weather__description">{this.props.description}</p>
                    <img className="current-weather__icon" src={icon} alt={this.props.description} />
                </div>

                <div>
                    <p className="current-weather__feels-like">Feels like: {this.props.feelsLike } &#8451;</p>
                </div>

            </div>
        )
    }
}

export default CurrentWeather;


