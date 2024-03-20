import { useState, useEffect } from "react";

function useCounter(initialCount){
    let [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);
    
    let incrementCount = () => {
        setCount(count + 1);
    };

    return {
        count,
        incrementCount,
    };
};

export default useCounter;