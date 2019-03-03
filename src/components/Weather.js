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
let gradient = undefined;

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

  findGradient() {
    switch (this.props.main) {
      case "Clear":
      gradient = "clear";
      break;
      case "Rain":
      gradient = "rain";
      break;
      case "Clouds":
      gradient = "clouds";
      break;
      case "Thunderstorm":
      gradient = "thunder";
      break;
      case "Drizzle":
      gradient = "drizzle";
      break;
      case "Snow":
      gradient = "snow";
      break;
      // case "Smoke":
      // gradient = smoke;
      // break;
      // case "Mist":
      // gradient = mist;
      // break;
      default :
      gradient = undefined;
    }
  }

  render(){
    this.findIcon();
    console.log(icon);
    this.findGradient();
    console.log(gradient);
    return (
      <div id="weather-gradient" className={gradient}>
      <div id='weather-details'>
        { this.props.city && <h1><span>Now in</span> {this.props.city}</h1>}
        { this.props.main && <img id="weather-icon" src={icon} alt={icon}/>}
        { this.props.main && <p className='main-info'>{this.props.main}</p>}
        { this.props.temperature && <div className='temp'><img src={temp} alt='temp icon'/><p>{this.props.temperature}°C</p></div>}
        { this.props.error && <p>{this.props.error}</p>}
        <button><span>Back</span></button>
      </div>
      </div>
    );
  }
}

export default Weather;
