import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userData={userInput} onChange={handleUserInputChange}/>
      <ResultsTable userData={userInput} />
    </>
  );
}

export default App;
