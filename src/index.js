import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";

import { createStore, applyMiddleware } from "redux";
import rootreducer from "./reducers";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootreducer, applyMiddleware(...middleWares));

// console.log(store);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
