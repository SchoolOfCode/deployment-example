import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getJoke() {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
      const data = await res.json();
      console.log(data);
      setJoke(data.joke);
    }
    getJoke();
  }, []);

  return (
    <div className="App">
      <h1>My first useEffect fetch!</h1>
      <p>{joke}</p>
    </div>
  );
}

export default App;
