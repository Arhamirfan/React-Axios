import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
//method 1:
// class Button extends Component {
//   static contextType = LanguageContext;
//   render() {
//     const text = this.context === "english" ? "submit" : "Voorleggen";
//     return <button className="ui button primary">{text}</button>;
//   }
// }

//method 2:
class Button extends Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    let value = "primary";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
