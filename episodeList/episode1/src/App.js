import "./App.css";

function App() {
  // const name = "Sahil";
  // const age = 23;
  // const email = "sahil@sahil.com";
  // const user = (
  //   <div>
  //     <h2>{age}</h2>
  //     <h2>{name}</h2>
  //     <h2>{email}</h2>
  //   </div>
  // );
  return (
    <div className="App">
      {/* <User name="Sahil" age={22} email="sahil@ambre.com" />
      <User name="Jake" age={23} email="jake@01.com" />
      <User name="john" age={22} email="john@33.com" /> */}

      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={120000} position="Junior SDE" company="Google" />
      <Job salary={180000} position="Project Manager" company="Netlix" />
    </div>
  );
}

// const GetName = () => {
//   return "sahil";
// };
// const props = {
//   name: "Sahil",
//   age: 22,
//   email: "sahil@ambre.com",
// };

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
