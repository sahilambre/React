import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          // alert("hey");
          setShowText(!showText);
        }}
      >
        Show/ Hide
      </button>
      {showText && <h1>Hi my name is Sahil</h1>}
    </div>
  );
}

export default App;
