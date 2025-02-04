import { useState } from "react";

const UseStateExample = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        // increment by 3 but increment by 1
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);

        // solution
        setCounter((pre) => pre + 1);
    };
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
};

export default UseStateExample;
