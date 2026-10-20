import {useState, useEffect} from 'react';


type User = {id : number , name : string , email : string};

function UserSearch() {
    const [query, setQuery] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);



    useEffect (() => {
       

        const LoadUsers = async () => {
            setIsLoading(true);
            try {
                const response = await fetch ("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) {
                    throw new Error ("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            }
            finally {
                setIsLoading(false);

            }

            
        }
        LoadUsers();

    }, []);


    const filteredusers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));

    {filteredusers.length === 0 && <p>No users found.</p>}

    return (
        <div>
            <h1> User Search </h1>
            <input type = "text" value = {query} onChange = {(e) => setQuery(e.target.value)} placeholder = "Search Users" />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {filteredusers.map(user => (
                    <li key = {user.id}>
                        <p> {user.name} - {user.email} </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserSearch;