import { useState } from "react";

export function Box({ id, turn, setTurn, play, check }) {
  const [clicked, setClicke] = useState(false);
  return (
    <div
      className="box"
      id={id}
      onClick={() => {
        if (!clicked && play) {
          if (turn === "X") {
            document.getElementById(id).textContent = "X";
            setTurn("O");
          } else {
            document.getElementById(id).textContent = "O";
            setTurn("X");
          }
          console.log(document.getElementById(id).textContent);
          check();
        }
      }}
    ></div>
  );
}
