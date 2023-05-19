import React, {useState} from "react";
import classes from './counter.module.scss';

export default function Counter() {
    const [counter, setCount] = useState(0);

    function increment() {
        setCount(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.btn} onClick={increment}>add</button>
        </div>
    )
}
