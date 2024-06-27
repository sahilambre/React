function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "20px",
    borderRadius: "5px",
    border: "none",
    cursor: "poninter",
  };
  // return <button className={styles.button}>Click me</button>; // styling using a module
  return <button style={styles}>Click me</button>; // inline css
}

export default Button;
