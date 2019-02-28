//we importe the react object from react package
import React from "react";

class Titles extends React.Component {
  render(){
    return (
      <div id='Titles'>
        <h1>Instant Weather</h1>
        <p>Find out instant weather for your city</p>
        <button><span>Start</span></button>
      </div>
    );
  }
}

export default Titles;
