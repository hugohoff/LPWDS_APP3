//we importe the react object from react package
import React from "react";

class Weather extends React.Component {
  render(){
    return (
      <div id='weather-details'>
        { this.props.city && <h1>Now in {this.props.city}</h1>}
        { this.props.icon && <img id="weather-icon" src={this.props.icon} alt={this.props.icon}/>}
        { this.props.main && <p class='main-info'>{this.props.main}</p>}
        { this.props.temperature && <p class='temp' ><span></span>{this.props.temperature}°C</p>}
        { this.props.error && <p>{this.props.error}</p>}
        <button><span>Back</span></button>
      </div>
    );
  }
}

export default Weather;
