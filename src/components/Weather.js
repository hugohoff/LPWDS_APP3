//we importe the react object from react package
import React from "react";

import rain from '../assets/images/rain-icon.png'; // Tell Webpack this JS file uses this image
import clouds from '../assets/images/clouds-icon.png';
import clear from '../assets/images/clear-icon.png';
import drizzle from '../assets/images/drizzle-icon.png';
import snow from '../assets/images/snow-icon.png';
import temp from '../assets/images/temp-icon.png';
import thunder from '../assets/images/thunder-icon.png';
import wind from '../assets/images/wind-icon.png';

let icon = undefined;

class Weather extends React.Component {

  findIcon() {
    switch (this.props.main) {
      case "Clear":
      icon = clear;
      break;
      case "Rain":
      icon = rain;
      break;
      case "Clouds":
      icon = clouds;
      break;
      case "Thunderstorm":
      icon = thunder;
      break;
      case "Drizzle":
      icon = drizzle;
      break;
      case "Snow":
      icon = snow;
      break;
      // case "Smoke":
      // icon = smoke;
      // break;
      // case "Mist":
      // icon = mist;
      // break;
      default :
      icon = undefined;
    }
  }
  render(){
    this.findIcon();
    console.log(this.icon);
    return (
      <div id='weather-details'>
        { this.props.city && <h1><span>Now in</span> {this.props.city}</h1>}
        { this.props.main && <img id="weather-icon" src={icon} alt="this.props.main"/>}
        { this.props.main && <p className='main-info'>{this.props.main}</p>}
        { this.props.temperature && <p className='temp' ><span></span>{this.props.temperature}°C</p>}
        { this.props.error && <p>{this.props.error}</p>}
        <button><span>Back</span></button>
      </div>
    );
  }
}

export default Weather;
