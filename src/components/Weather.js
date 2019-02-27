//we importe the react object from react package
import React from "react";

class Weather extends React.Component {
  render(){
    return (
      <div>
        { this.props.city && <p>NOW IN {this.props.city}</p>}
        { this.props.main && <p>{this.props.main}</p>}
        { this.props.temperature && <p>{this.props.temperature}</p>}
        { this.props.icon && <p>{this.props.icon}</p>}
        { this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
