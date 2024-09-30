import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Jokes() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>Jokes from backend</h1>
      <p> jokes length : {jokes.length}</p>
      {jokes.map((jokes) => {
        return (
          <div key={jokes.id}>
            <p>{jokes.joke}</p>
            <p>{jokes.punchLine}</p>
          </div>
        );
      })}
      <h2>jokes ends here</h2>
    </div>
  );
}

export default Jokes;
