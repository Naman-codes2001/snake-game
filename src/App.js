import React from "react";
import SnakeGame from "./SnakeGame.js";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Snake Game</h1>
      <div className="textWrapper">
        <p id="instructions">Use ↑ / ↓ / → / ← OR W / A / S / D to play</p>
        <p className="subTitle">
          A traditional most popular snake game created with the
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ReactJs{" "}
          </a>
        </p>
      </div>
      <SnakeGame />
    </div>
  );
}

export default App;
