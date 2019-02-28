//we importe the react object from react package
import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "fc844cecf0f7a720b8ac6d5912ff6b55";

//initialize a component
class App extends React.Component {

  state = {
    city: undefined,
    temperature: undefined,
    main: undefined,
    icon: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&land=fr&units=metric&appid=" + API_KEY);
    const data = await api_call.json();

    if (city){
      console.log(data);
      let icon = null;
      switch (data.weather[0].main) {
        case "Clear":
        icon = "./assets/images/clear-icon.png";
        break;
        case "Rain":
        icon = "./assets/images/rain-icon.png";
        break;
        case "Clouds":
        icon = "./assets/images/clouds-icon.png";
        break;
        case "Thunderstorm":
        icon = "./assets/images/thunder-icon.png";
        break;
        case "Drizzle":
        icon = "./assets/images/drizzle-icon.png";
        break;
        case "Snow":
        icon = "./assets/images/snow-icon.png";
        break;
        case "Smoke":
        icon = "./assets/images/wind-icon.png";
        break;
        case "Mist":
        icon = "./assets/images/wind-icon.png";
        break;
        default :
        icon = undefined;
      }
      this.setState({
        city : data.name,
        temperature : data.main.temp,
        main : data.weather[0].main,
        icon: icon,
        error : ""
      })
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        main: undefined,
        icon: undefined,
        error : "Oups, can't find weather"
      })
    }
  }

  render(){
    return (
      <div class='container wrapper'>
      <div class='row d-flex flex-column align-items-center justify-content-center inner'>
      <div>
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      main={this.state.main}
      icon={this.state.icon}
      error={this.state.error}
      />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
