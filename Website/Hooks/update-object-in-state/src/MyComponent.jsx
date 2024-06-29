import React, { useState } from "react";

function MyComponent(event) {
  const [car, setCar] = useState({
    year: 2024,
    make: "maruti",
    model: "Dzire",
  });

  function handleYearChange(event) {
    //?spread operator
    setCar((c) => ({ ...c, year: event.target.value }));
    // setCar({ year: 2024, make: "maruti", model: "Dzire", year: 2025 }); //! is same as the above, js will take the later property
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default MyComponent;
