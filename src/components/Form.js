//we importe the react object from react package
import React from "react";

class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getWeather}>
        <h1>Select a city</h1>
        <input type="text" name="city" placeholder="London"/>
        <button><span>Next</span></button>
      </form>
    );
  }
}

export default Form;
