import {useState, useEffect} from 'react'

type User = {id : number, name : string}

function RaceDemo() {

    const [query, setQuery] = useState<string>('')
    const [results, setResults] = useState<User[]>([])
useEffect(() => {
    if (query === "") {
        setResults([]);
        return;
    }

    const controller = new AbortController();          

    const load = async () => {
        try {
            const res = await fetch(`http://localhost:8000/search?q=${query}`, {
                signal: controller.signal,             
            });
            const data: User[] = await res.json();
            setResults(data);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                console.log("cancelled:", query);
                return;
            }
            console.error(err);
        }
    };
    load();

    return () => controller.abort();                   
}, [query]);



    return (
        <div>
            <h1>Race Conditions</h1>
            <input  type  = "text" value={query} placeholder= "name"  onChange={(e) => setQuery(e.target.value)}  />
            <p>"your query is {query}</p>
        <ul>
            {results.map((u) => (
                <li key = {u.id}>
                    <p>{u.name}</p>

                </li>
            ))}
        </ul>
        </div>
    )
}

export default RaceDemo;

