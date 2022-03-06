import React, {useState} from 'react'
import s from "./Settings.module.css";

type DisplayPropsType ={
    onClickUp:()=>void
    onClickDown:()=>void
    maxValue: number
    onClickUpStartValueHandler:()=>void
    onClickDownStartValueHandler:()=>void
    startValue: number
}



const DisplaySettings =(props: DisplayPropsType)=>{





    return(
        <div className={s.settingsDisplay}>
          <div> max value <button onClick={props.onClickDown}>-</button>{props.maxValue} <button onClick={props.onClickUp}>+</button></div>
          <div> start value <button onClick={props.onClickDownStartValueHandler}>-</button>{props.startValue} <button onClick={props.onClickUpStartValueHandler}>+</button></div>
        </div>
    )
}

export default DisplaySettings