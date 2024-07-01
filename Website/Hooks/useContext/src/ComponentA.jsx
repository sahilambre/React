import { useState } from "react";
import ComponentB from "./ComponentB.jsx";
import { createContext } from "react";

export const userContext = createContext();

function ComponentA() {
  const [user, setUSer] = useState("Sahil");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`hello ${user}`}</h2>

      <userContext.Provider value={user}>
        <ComponentB user={user} />
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;
