// import styles from "./App.module.css";
import "./App.css";
import { User } from "./User.js";

// function App() {
//   // const age = 19;
//   // const isGreen = true;

//   return (
//     <div className="App">
//       {age >= 18 ? <h1>Over age</h1> : <h1>Under Age</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>
//       {isGreen && <button>This is a button</button>}
//     </div>
//   );
// }

// function App() {
//   const users = [
//     { name: "Perdo", age: 21 },
//     { name: "jack", age: 22 },
//     { name: "Jessica", age: 23 },
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return (
//           // <div>
//           //   {user.name} {user.age}
//           // </div>

//           <User name={user.name} age={user.age} />
//         );
//       })}
//     </div>
//   );
// }
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) {
          return <h1>{planet.name}</h1>;
        }
      })}
    </div>
  );
}

export default App;
