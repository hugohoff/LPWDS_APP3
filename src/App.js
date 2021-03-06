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
      this.setState({
        city : data.name,
        temperature : data.main.temp,
        main : data.weather[0].main,
        error : ""
      })
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        main: undefined,
        error : "Oups, can't find weather"
      })
    }
  }

  render(){
    return (
      <div className='container wrapper'>
      <div className='row d-flex flex-column align-items-center justify-content-center inner'>
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
