import { useState,useEffect } from "react"

export const EditUserForm = ({props,currentUser,setEditing,updateUser}) =>{

   const [user, setUser] = useState(currentUser)

   const handleInputChange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
   }

   useEffect(() => {
    setUser(currentUser)
  }, [props])

    return (
        <form onSubmit={e=>{
            e.preventDefault()
            updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input name="name" type="text" value={user.name} placeholder="Name" onChange={handleInputChange}/>
            <label>User Name</label>
            <input name="userName" type="text" value={user.userName} placeholder="User Name" onChange={handleInputChange}/>
            <button>Update User</button>
            <button onClick={()=>{
                setEditing(false)
            }}>Cancle</button>
        </form>
    )
}