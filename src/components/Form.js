//we importe the react object from react package
import React from "react";

class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="London"/>
        <button>GET WEATHER</button>
      </form>
    );
  }
}

export default Form;
