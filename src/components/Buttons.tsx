import s from "./Counter.module.css";
import React from "react";

type ButtonsPropsType ={
    title?: string
    onClickHandler: ()=>void
    onClickResetHandler: ()=>void
    score: number
    maxValue: number
    startValue:number

}

const Buttons =(props: ButtonsPropsType)=> {





return (

    <div className={s.buttons}>
        <button disabled={props.score === props.maxValue} className={props.score === 5 ? s.disabled : s.buttonInc}  onClick={props.onClickHandler}>inc</button>
        <button disabled={props.score === props.startValue} className={props.score === props.startValue ? s.disabled : s.buttonReset} onClick={props.onClickResetHandler}>reset</button>
    </div>

)
}

export default  Buttons