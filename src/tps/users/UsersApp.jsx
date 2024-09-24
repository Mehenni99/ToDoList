
import UsersLayout from "./UsersLayout";
import React, { createContext, useState } from "react";

 export const UsersContext=createContext({
    users:[],
    lastId:0,
    addUser:()=>null,
    updateUser:()=>null,
    deleteUser:()=>null
})

export default function UsersApp(){
    const [users,setUsers]=useState([])
    const [lastId,setLastId]=useState(0)

    const addUser=(data)=>{
        setUsers(prevState=>[...prevState, data.payload])
        setLastId(prevState=>prevState+1)
        window.history.back()
    }
    const deleteUser=(data)=>{
  setUsers(prevState=>prevState.filter(user=>user.id!==parseInt(data.payload.id) ))
        window.history.back()
    }
    const updateUser=(data)=>{
        const {id, ...rest}=data.payload
       setUsers (prevState=>prevState.map(user =>{
if (user.id===id) {
    return {...rest,id:user.id}
} else {
    return user
}
       }))
       window.history.back()
    }


    return (<>
   
     <UsersContext.Provider value={{
        users:users,
        lastId:lastId,
        actions:{
            addUser,
            updateUser,
            deleteUser
     }
}}>
     <UsersLayout/>
     </UsersContext.Provider>
    </>
       
    );
}