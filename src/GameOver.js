import React from "react";

function GameOver(props) {
  return (
    <div
      id="GameBoard"
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}
    >
      <div id="GameOver" style={{ fontSize: props.width / 15 }}>
        <div id="GameOverText">GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div>
          {props.newHighScore ? "New " : " "}High Score:{" "}
          {props.highScore}
        </div>
        <div id="Spacebar">Press <u>Space</u> to restart</div>
      </div>
    </div>
  );
}

export default GameOver;
