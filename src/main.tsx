import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "../scss/index.scss";

const store = configureStore();

render(
  <Provider store={store}>こんにち和</Provider>,
  document.getElementById("root")
);
