import React from "react";
import { ThemeProvider } from "styled-components";

// import theme from "./Theme/index.js";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { BrowserRouter as Router } from "react-router-dom";

import { rootReducer } from "./Reducers";

const theme = 
 {

  primaryColor: "#284B63",
  secondaryColor: "#D9D9D9",
  accentColor: "#3C6E71",
  black: "#353535",
  white: "FFFFFF",
};
// MOCKS+++++++++++++++++
const { worker } = require("./mocks/browser.js");

worker.start();
// MOCKS for testing+++++++++++++++++++

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("STORE", store.getState());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,

  document.getElementById("root")
);
