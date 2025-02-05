import { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Render");
        const id = setInterval(() => {
            setCount((pre) => pre + 1);
        }, 1000);

        // first clean up then update if we don't use clean up then it would be memoery leake
        return () => {
            clearInterval(id);
        };
    }, [count]);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default UseEffect;
