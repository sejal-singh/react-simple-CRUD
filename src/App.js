import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UserTable } from "./tables/UserTable"
import { AddUserForm } from "./forms/AddUserForm"
import { EditUserForm } from './forms/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: "Sejal Singh", userName: "sejalsingh" },
    { id: 2, name: "Sonu Singh", userName: "sonuSingh" },
    { id: 3, name: "Rachna Singh", userName: "rachnaSingh" }
  ]
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', username: '' })

  const addUser = (user) => {
    console.log("add", user, users.length);
    user.id = users.length + 1
    setUsers([...users, user])
    console.log("added", users);
  }

  const deleteUser = (id) => {
    setUsers(users.filter(data => data.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, userName: user.userName })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="App">
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">

            {editing ? <div><h2>Edit user</h2><EditUserForm updateUser={updateUser} setEditing={setEditing} currentUser={currentUser} /></div> :
              <div> <h2>Add user</h2><AddUserForm addUser={addUser} /></div>}

          </div>
          <div className="flex-large">
            <UserTable usersData={users} deleteUser={deleteUser} editRow={editRow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
