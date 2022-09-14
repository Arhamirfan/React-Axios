import React from "react";
import ReactDOM from "react-dom/client";
//import store from "./reactRedux/Store";
import store from "./UdemySection21/Store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reactRedux/Store/reducers";

store.subscribe(() => {
  console.log(store.getState());
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
