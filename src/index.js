import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

// const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
