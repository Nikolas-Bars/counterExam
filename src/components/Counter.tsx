import React from "react";
import s from './Counter.module.css'
import Buttons from "./Buttons";
import Display from "./Display";

type CounterPropsType = {
    score: number
    setScore: (score: number)=> void
    onClickHandler:()=>void
    onClickResetHandler:()=>void
}


const Counter =(props: CounterPropsType)=>{

 const onClickHandler =()=>{
     props.onClickHandler()
 }

  const onClickResetHandler =()=>{
      props.onClickResetHandler()
  }

    return(
        <div className={s.counter}>
            <Display score={props.score}/>
            <Buttons score={props.score} onClickHandler={onClickHandler} onClickResetHandler={onClickResetHandler}/>

        </div>
    )
}

export default Counter