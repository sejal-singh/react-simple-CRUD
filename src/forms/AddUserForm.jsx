import { useState } from "react"

export const AddUserForm = ({addUser}) => {
    const [user, setUser] = useState({id:null, name:"", userName:""})

    const inputChange = (event) =>{
        setUser({...user, [event.target.name]:event.target.value})
        console.log(user);
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!user.name || !user.userName) return 
            addUser(user)
            setUser({id:null,name:"", userName:""})
        }}>
            <label>Name</label>
            <input name="name" value={user.name} placeholder ="Name" type="text" onChange={inputChange}/>
            <label>User name</label>
            <input name="userName" type="text" value={user.userName} placeholder ="User name" onChange={inputChange}/>
            <button >Add new User</button>
        </form>
    )
}