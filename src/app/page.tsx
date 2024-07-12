"use client";
import { useState } from "react";

const Home = () => {
  // State to store the user's choice
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [game, setGame] = useState<string | null>(null);

  
  const handleChoice = (choice: string) => {
    
    setUserChoice(choice);

    
    const choices = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoiceLocal = choices[randomIndex];

    
    let gameResult;
    if (computerChoiceLocal === choice) {
      gameResult = "It's a Tie";
    } else if (
      (computerChoiceLocal === "scissors" && choice === "stone") ||
      (computerChoiceLocal === "stone" && choice === "paper") ||
      (computerChoiceLocal === "paper" && choice === "scissors")
    ) {
      gameResult = "You Won";
    } else {
      gameResult = "You Lost";
    }

    
    setComputerChoice(computerChoiceLocal);
    setGame(gameResult);

    console.log(`Computer chose: ${computerChoiceLocal}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Stone Paper Scissors</h1>

      
      <div className="flex space-x-4 mb-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleChoice("stone")}
        >
          Stone
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => handleChoice("paper")}
        >
          Paper
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleChoice("scissors")}
        >
          Scissors
        </button>
      </div>

      {/* Display user's choice */}
      {userChoice && (
        <div className="text-2xl">
          You chose: <span className="font-bold">{userChoice}</span>
        </div>
      )}
      {game && (
        <div className="text-2xl">
          Result: <span className="font-bold">{game}</span>
        </div>
      )}
    </div>
  );
};

export default Home;
