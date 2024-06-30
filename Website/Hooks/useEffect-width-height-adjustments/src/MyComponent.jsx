import React, { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listner added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listner removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default MyComponent;
