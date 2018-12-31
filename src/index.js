import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";

import { createStore } from "redux";
import rootreducer from "./reducers";

const store = createStore(rootreducer);

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
