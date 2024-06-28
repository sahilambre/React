function Button() {
  //   let count = 0;

  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count += 1;
  //       console.log(`${name} you clicked ${count} time/s`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };

  //   const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  //   return <button onClick={() => handleClick("sahil")}>Click Me</button>;
  //   return <button onClick={() => handleClick2("Bro")}>Click Me</button>;

  //   const handleClick = (e) => console.log(e);

  const handleClick = (e) => (e.target.textContent = "OUCH 🤕");

  return <button onDoubleClick={(e) => handleClick(e)}>Click me 😀</button>;
}

export default Button;
