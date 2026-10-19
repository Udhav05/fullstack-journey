import UserCard from "./UserCard";
import Counter from "./Counter";
import NameInput from "./NameInput";
import TodoList from "./TodoList";
import EffectDemo from './EffectDemo';
import UserList from './UserList';

function App() {
  
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
     
      </div>
  )
}

export default App;