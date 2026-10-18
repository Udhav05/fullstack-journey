import {useState} from 'react';

function NameInput() {
    const [name, setName] = useState<string>("");

    const [age, setAge] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
            

    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setAge(Number(e.target.value));
    }

    const handleClear = () => {
        setName("");
        setAge(0);
    }




    return (
        <div>
            <h1> Name Input</h1>

            <input type ="text" value ={name} onChange={handleChange} placeholder="Enter your name" />
            <p>Hello , {name}</p>

            <input type = "number" value = {age} onChange={handleAgeChange} placeholder ="Enter Your Age" />
            <p>Your age is: {age}</p>

            <button onClick={handleClear}>Clear</button>

            
            
        </div>
    )
    
}


export default NameInput;