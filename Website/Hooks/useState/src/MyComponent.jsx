import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  let updateName = () => {
    setName("spongebob");
  };

  let incrementAge = () => {
    setAge(age + 1);
  };

  let toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>

      <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
