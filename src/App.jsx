import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "./box";

function App() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [turn, setTurn] = useState("X");
  const [play, setPlay] = useState(true);
  const [winner, setWinner] = useState("");

  function check() {
    if (
      document.getElementById(0).textContent === "X" &&
      document.getElementById(1).textContent === "X" &&
      document.getElementById(2).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(0).textContent === "O" &&
      document.getElementById(1).textContent === "O" &&
      document.getElementById(2).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(0).textContent === "X" &&
      document.getElementById(4).textContent === "X" &&
      document.getElementById(8).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(0).textContent === "O" &&
      document.getElementById(4).textContent === "O" &&
      document.getElementById(8).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(0).textContent === "X" &&
      document.getElementById(3).textContent === "X" &&
      document.getElementById(6).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(0).textContent === "O" &&
      document.getElementById(3).textContent === "O" &&
      document.getElementById(6).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(1).textContent === "X" &&
      document.getElementById(4).textContent === "X" &&
      document.getElementById(7).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(1).textContent === "O" &&
      document.getElementById(4).textContent === "O" &&
      document.getElementById(7).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(3).textContent === "X" &&
      document.getElementById(4).textContent === "X" &&
      document.getElementById(5).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(3).textContent === "O" &&
      document.getElementById(4).textContent === "O" &&
      document.getElementById(5).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(2).textContent === "X" &&
      document.getElementById(4).textContent === "X" &&
      document.getElementById(6).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(2).textContent === "O" &&
      document.getElementById(4).textContent === "O" &&
      document.getElementById(6).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(2).textContent === "X" &&
      document.getElementById(5).textContent === "X" &&
      document.getElementById(8).textContent === "X"
    ) {
      setWinner("X");
      setPlay(false);
      return;
    }
    if (
      document.getElementById(2).textContent === "O" &&
      document.getElementById(5).textContent === "O" &&
      document.getElementById(8).textContent === "O"
    ) {
      setWinner("O");
      setPlay(false);
      return;
    }
  }

  return (
    <div className="container">
      {arr.map((item) => {
        return (
          <Box
            key={item}
            id={item}
            turn={turn}
            setTurn={setTurn}
            play={play}
            check={check}
          />
        );
      })}
      {winner && <span>winner is : {winner}</span>}
    </div>
  );
}

export default App;
