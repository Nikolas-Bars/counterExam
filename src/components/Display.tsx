import React from 'react'
import s from "./Counter.module.css";

type DisplayPropsType ={
    score: number
    maxValue: number
}

const Display =(props: DisplayPropsType)=>{


    return(
        <div className={props.score === props.maxValue ? s.displayOff : s.displayOn}>
            {props.score}
        </div>
    )
}

export default Display