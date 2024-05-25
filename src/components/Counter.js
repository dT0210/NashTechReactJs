import { useState } from "react";
import "./style.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className='counter'>
          <button className='counter-button' onClick={()=>{setCounter(counter-1)}}>-</button>
          <p>{counter}</p>
          <button className='counter-button' onClick={()=>{setCounter(counter+1)}}>+</button>
        </div>
    )
}

export default Counter;