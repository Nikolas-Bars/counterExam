import React, {useState} from "react";
import s from '../Counter.module.css'
import Buttons from "../Buttons";
import Display from "../Display";
import DisplaySettings from "./DisplaySettings";

type CounterPropsType = {
    maxValue: number
    setMaxValue: (maxValue: number)=>void
    startValue: number
    setStartValue: (startValue: number)=> void
    setScore:(value: number)=>void
}


const Settings =(props: CounterPropsType)=>{



    const onClickUpHandler =()=>{
       props.setMaxValue(props.maxValue + 1)
    }

    const onClickDownHandler =()=>{
        props.setMaxValue(props.maxValue - 1)
    }

    const onClickUpStartValueHandler =()=>{

        props.setStartValue(props.startValue + 1)
    }

    const onClickDownStartValueHandler =()=>{
        props.setStartValue(props.startValue - 1)
    }

    const onClickResetHandler =()=>{

    }

    const setToLocalStorage =()=>{
        localStorage.setItem("StartValueKey", JSON.stringify(props.startValue))
        let localStorageValue = localStorage.getItem("StartValueKey")
        if(localStorageValue){
        props.setScore(JSON.parse(localStorageValue))}
    }

    return(
        <div className={s.counter}>
            <DisplaySettings startValue={props.startValue} onClickUpStartValueHandler={onClickUpStartValueHandler} onClickDownStartValueHandler={onClickDownStartValueHandler} onClickUp={onClickUpHandler} onClickDown={onClickDownHandler} maxValue={props.maxValue}/>
            <button onClick={setToLocalStorage}>SET</button>

        </div>
    )
}

export default Settings