import UserCard from "./UserCard";
import Counter from "./Counter";
import NameInput from "./NameInput";
import TodoList from "./TodoList";
import EffectDemo from './EffectDemo';
import UserList from './UserList';
import { useState } from "react";
import Timer from "./Timer";
import UserSearch from "./UserSearch";

function App() {

  const [show, setShow] = useState<boolean>(true);
  
    const users = [
      {id : 1, name: "Alice", isStudent : true,  age : 25},
      {id : 2, name: "Bob", age : 30},
      {id : 3, name: "Charlie", age : 35}
    ]
    return (

      <div>
      {users.map(user => <UserCard key = {user.id}  isStudent = {user.isStudent} name = {user.name} age = {user.age} />)}
      <Counter />
      <NameInput />
      <TodoList />
      < EffectDemo />
      <UserList />

      <button onClick ={() => setShow(!show)}>Toggle Timer</button>
      {show && <Timer />}

      <UserSearch />
     
      </div>
  )
}

export default App;