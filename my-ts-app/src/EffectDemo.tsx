import {useState, useEffect} from 'react';

function EffectDemo() {
    const [count, setCount] = useState<number>(0);


    console.log("count", count);


    useEffect(() => {
        console.log("Effect run");
    }, [count]);


    return (


        <div>
            <h1>Effect Demo</h1>
            <p>count : {count}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

    )
    


}

export default EffectDemo;