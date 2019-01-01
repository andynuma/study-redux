import React from "react";
import { connect } from "react-redux";

const App = ({ number, plus, minus, day, title, asyncMinus }) => {
  return (
    <div>
      <h2>
        {title},{number},{day}
      </h2>
      <button onClick={() => plus(10)}>+ 10</button>
      <button onClick={() => minus(10)}>- 10</button>
      <button onClick={() => asyncMinus(10)}>async- 10</button>
    </div>
  );
};
export default App;
