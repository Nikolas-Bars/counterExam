import React, {useEffect, useState} from "react";


export const CounterTwo = () => {

    const [count, setCount] = useState<number>(0)


    useEffect(() => {
        let valueAsString = localStorage.getItem('CounterValue')

        if (valueAsString) {
            setCount(JSON.parse(valueAsString))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('CounterValue', JSON.stringify(count))
    }, [count])

    const onClickHundler = () => {
        setCount(count + 1)
    }

    /*    const setToLocalStorage =()=>{
            localStorage.setItem('CounterValue', JSON.stringify(count))
            localStorage.setItem('CounterValue + 1', JSON.stringify(count + 1))
        }*/

    /*    const getFromLocalStorage =()=>{
            let valueAsString = localStorage.getItem('CounterValue')

        if(valueAsString) {
            setCount(JSON.parse(valueAsString))
        }

        }*/

    let ClearLocalStorage = () => {
        localStorage.clear()
        setCount(0)
    }
    /*
        let RemoveLocalStorage =()=>{
            localStorage.removeItem('CounterValue + 1')
        }*/

    return (
        <div>
            <span>{count}</span>
            <button onClick={onClickHundler}>inc</button>
            {/*            <button onClick={setToLocalStorage}>set to local storage</button>
            <button onClick={getFromLocalStorage}>get from local storage</button>
            <button onClick={ClearLocalStorage}>Clear</button>
            <button onClick={RemoveLocalStorage}>Remove</button>*/}

        </div>
    )

}