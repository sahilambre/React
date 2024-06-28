import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">Count: {counter}</p>
      <button className="counter-button" onClick={incrementCount}>
        Increment
      </button>
      <button className="counter-button" onClick={decrementCount}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
