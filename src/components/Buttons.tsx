import s from "./Counter.module.css";
import React from "react";

type ButtonsPropsType ={
    title?: string
    onClickHandler: ()=>void
    onClickResetHandler: ()=>void
    score: number
}

const Buttons =(props: ButtonsPropsType)=> {





return (

    <div className={s.buttons}>
        <button disabled={props.score === 5} className={props.score === 5 ? s.disabled : s.buttonInc}  onClick={props.onClickHandler}>inc</button>
        <button disabled={props.score === 0} className={props.score === 0 ? s.disabled : s.buttonReset} onClick={props.onClickResetHandler}>reset</button>
    </div>

)
}

export default  Buttons