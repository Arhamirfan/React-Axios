import React, { Component } from "react";
import UserCreate from "./components/userCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
export class FlagApp extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <h3>
            Select a language :
            <i
              className="flag us"
              onClick={() => {
                this.onLanguageChange("english");
              }}
            />
            <i
              className="flag nl"
              onClick={() => {
                this.onLanguageChange("dutch");
              }}
            />
          </h3>

          {/* <>{this.state.language}</> */}
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default FlagApp;
