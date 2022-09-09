import React, { useState, useEffect } from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange(event) {
    console.log(event.target.value);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <button type="submit" onClick={this.onInputClick}>
              Submit
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
