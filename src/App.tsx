import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings/Settings";

function App() {

    const [score, setScore] = useState(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setstartValue] = useState<number>(0)

    const onClickHandler = () => {
        if (score < maxValue) {
            setScore(score + 1)
        }
        console.log(score)
    }


    const onClickResetHandler = () => {
        setScore(startValue)
    }

    const setScoreFromLocalStorage =(startValue: number)=>{

    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="counters">
                    <div className="counter">
                        <Counter startValue={startValue} maxValue={maxValue} onClickResetHandler={onClickResetHandler} onClickHandler={onClickHandler} score={score}
                                 setScore={setScore}/>
                    </div>
                    <Settings setScore={setScore} startValue={startValue} setStartValue={setstartValue} maxValue={maxValue} setMaxValue={setMaxValue}/>
                </div>
            </header>
        </div>
    );
}

export default App;
