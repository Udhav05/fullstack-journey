import {useState} from 'react'

type Todo = {id : number, text : string};

function TodoList() {

    const [todos, setTodo] = useState<Todo[]>([]);

    const [input , setInput] = useState<string>("");

    const handleTodo = () => {
        if(input.trim() !== ""){
            const newTodo : Todo = {id : Date.now(), text : input};
            setTodo([...todos, newTodo])
            setInput("");

        }
    }

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (

        <div>
            <h1>Todo List</h1>


            <input type ="text" value = {input} onChange ={handleInputChange} placeholder = "Enter Your Todo" />

            <button onClick={handleTodo}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}

                        <button onClick={() => setTodo(todos.filter(t => t.id !== todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
   

}

export default TodoList;