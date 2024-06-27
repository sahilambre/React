import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="sahil" />
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App;
