import UserCard from "./UserCard";

function App() {
  
    const users = [
      {id : 1, name: "Alice", isStudent : true,  age : 25},
      {id : 2, name: "Bob", age : 30},
      {id : 3, name: "Charlie", age : 35}
    ]
    return (

      <div>
      {users.map(user => <UserCard key = {user.id}  isStudent = {user.isStudent} name = {user.name} age = {user.age} />)}
      </div>
  )
}

export default App;