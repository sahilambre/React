import React, { useState } from "react";

function MyComponent(event) {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  //! If i is not equal to index, the element is included in the new array.
  //! If i is equal to index, the element is excluded from the new array.

  return (
    <div>
      <p>List of Food</p>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
