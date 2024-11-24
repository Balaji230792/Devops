import { useEffect, useState } from "react";
const CounterSample = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <p>Count : {count}</p>
                <button onClick={() => setCount(count+1)}>Increment</button>
                <button onClick={() => setCount(count-1)}>Decrement</button>
            </div>
            {/* <div>
                 <PureExample value={count}/>
            </div> */}
        </div>
        

    );
}

export default CounterSample;
