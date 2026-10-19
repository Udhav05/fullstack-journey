import {useState, useEffect} from 'react';

type User = { id : number , name : string, email : string};

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
       const loadUsers = async () => {
        try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) {
                throw new Error ("Network response was not ok");
            }
            const data : User[] = await response.json();
            setUsers(data);
        } catch (err) {
            setError( err instanceof Error ? err.message : 'Unknown Error')
            
        }

        finally {
            setIsLoading(false);
        }

        
       }

       loadUsers();
    }, []);


    if(isLoading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (


        <div>
            <h1>UserList</h1>
            
            
            <ul>

               {
                    users.map(user => (
                        <li key = {user.id}>
                            <p>Name : {user.name}</p>
                            <p>Email : {user.email}</p>
                        </li>
                        

                    ))
                
            }
               
            </ul>
        </div>
    )






}

export default UserList;

