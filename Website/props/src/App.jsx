import Student from "./Students.jsx";

function App() {
  return (
    <>
      <Student name="Spongebob" age="30" isStudent={true} />;
      <Student name="Patrick" age={42} isStudent={false} />;
      <Student name="Sahil" age={23} isStudent={false} />;
      <Student name="Sahil1" age={21} isStudent={true} />;
      <Student />;{/* default props */}
      <Student name="Larry" />;
    </>
  );
}

export default App;
