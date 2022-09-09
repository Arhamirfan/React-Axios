import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./Components/ImageList";

class Uapp extends React.Component {
  state = { images: [] };

  onSearchSubmit = (term) => {
    console.log(term);
    unsplash
      .get("/search/photos", {
        params: { query: term },
      })
      .then((res) => {
        console.log(
          "🚀 ~ file: Uapp.js ~ line 14 ~ Uapp ~ onSearchSubmit ~ response"
        );
        console.log(res.data.results);
        this.setState({ images: res.data.results });
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Uapp.js ~ line 16 ~ Uapp ~ onSearchSubmit ~ error",
          error
        );
      });
  };
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}
// const Uapp = () => {

//   return (
//     <>
//      <div className="ui container" style={{marginTop: '10px'}}>
//      <SearchBar />
//      </div>
//     </>
//   );
// };

export default Uapp;
