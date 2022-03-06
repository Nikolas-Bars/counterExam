import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

function App() {

    const [score, setScore] = useState(0)

    const onClickHandler =()=>{
        if(score < 5) {
            setScore(score + 1)
        }
console.log(score)
    }


    const onClickResetHandler =()=>{
        setScore(0)
    }


  return (
    <div className="App">
      <header className="App-header">
        <Counter onClickResetHandler={onClickResetHandler} onClickHandler={onClickHandler} score={score} setScore={setScore}/>
      </header>
    </div>
  );
}

export default App;
