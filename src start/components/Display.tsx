import React from 'react'
import s from "./Counter.module.css";

type DisplayPropsType ={
    score: number
}

const Display =(props: DisplayPropsType)=>{


    return(
        <div className={props.score === 5 ? s.displayOff : s.displayOn}>
            {props.score}
        </div>
    )
}

export default Display