import React, { useEffect, useState } from "react";
// React Component

const choices = ["paper", "scissors", "rock"];

const Title = ({ title, value }) => (
  <h2 style={{ fontSize: 22, color: "red" }}>
    {title}:{value}
  </h2>
);

const GameData = ({ userChoice, aiChoice, result }) => {
  return (
    <>
      <Title title="Your Choice" value={userChoice} />
      <Title title="AI choice" value={aiChoice} />
      <Title title="Result" value={result} />
    </>
  );
};

const Buttons = ({ options, onClick }) => {
  return (
    <div>
      {options.map((choice, i) => {
        return (
          <button key={`op-${i}`} data-choice={choice} onClick={onClick}>
            {choice}
          </button>
        );
      })}
    </div>
  );
};

const App = () => {
  const [result, setResult] = useState("");
  const [userChoice, setUserChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);

  const handleUserSelection = (e) => {
    // User Choice
    const selected = e.target.getAttribute("data-choice");
    setUserChoice(selected); // async
    // // Random Number
    // const random = Math.floor(Math.random() * 3);
    // const aiSelection = choices[random];
    // setAiChoice(aiSelection);

    // if (aiSelection === "paper" && selected === "scissors") {
    //   // user won
    //   setResult("You Won");
    // }

    // if (aiSelection === "paper" && selected === "rock") {
    //   // ai won
    //   setResult("You Lose");
    // }

    // if (aiSelection === "paper" && selected === "paper") {
    //   // draw
    //   setResult("Draw");
    // }
    // if (aiSelection === "rock" && selected === "scissors") {
    //   // ai won
    //   setResult("You Lose");
    // }
    // if (aiSelection === "rock" && selected === "paper") {
    //   // user won
    //   setResult("You Won");
    // }
    // if (aiSelection === "rock" && selected === "rock") {
    //   // draw
    //   setResult("Draw");
    // }
    // if (aiSelection === "scissors" && selected === "scissors") {
    //   // draw
    //   setResult("Draw");
    // }
    // if (aiSelection === "scissors" && selected === "rock") {
    //   // user won
    //   setResult("You Won");
    // }
    // if (aiSelection === "scissors" && selected === "paper") {
    //   // ai won
    //   setResult("You Lose");
    // }
  };

  const setUserSelection = ({ target }) =>
    setUserChoice(target.getAttribute("data-choice"));

  // LifeCycle
  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    const aiSelection = choices[random];
    setAiChoice(aiSelection);

    if (aiSelection === "paper" && userChoice === "scissors") {
      // user won
      setResult("You Won");
    }

    if (aiSelection === "paper" && userChoice === "rock") {
      // ai won
      setResult("You Lose");
    }

    if (aiSelection === "paper" && userChoice === "paper") {
      // draw
      setResult("Draw");
    }
    if (aiSelection === "rock" && userChoice === "scissors") {
      // ai won
      setResult("You Lose");
    }
    if (aiSelection === "rock" && userChoice === "paper") {
      // user won
      setResult("You Won");
    }
    if (aiSelection === "rock" && userChoice === "rock") {
      // draw
      setResult("Draw");
    }
    if (aiSelection === "scissors" && userChoice === "scissors") {
      // draw
      setResult("Draw");
    }
    if (aiSelection === "scissors" && userChoice === "rock") {
      // user won
      setResult("You Won");
    }
    if (aiSelection === "scissors" && userChoice === "paper") {
      // ai won
      setResult("You Lose");
    }

    // Mount
    return () => {
      // Unmount
    };
  }, []);

  // Custom Hooks
  return (
    <div>
      <GameData result={result} userChoice={userChoice} aiChoice={aiChoice} />
      <Buttons options={choices} onClick={setUserSelection} />
    </div>
  );
};

// Rock Paper Scissors

// Steps:
// View (3 buttons, Result, Choices)
// When user clicks on the button
// Select a random option
// Compare
// Result

export default App;
