import React, { useContext, useRef,useEffect, useState } from "react";
import { UsersContext } from "./UsersApp";
import { useParams } from "react-router-dom";


export default function UsersEdit({onAddUser}){
    const context=useContext(UsersContext)
const fullName=useRef(null)
const country=useRef(null)
const [currentUser,setCurrentState]=useState([])
const param=useParams()

const handleSubmit=(e)=>{
    e.preventDefault()
   
context.actions.updateUser({
   payload:{
    fullName:fullName.current.value,
    country:country.current.value,
    id:parseInt(param.id)

   }  
})

}
useEffect(() => {
    const {id}=param
    const user= context.users.filter(user=>user.id=== parseInt(id))
    if (user.length>0) {
        setCurrentState(...user)  
    } else {
        console.error('User not found')
    }
    
}, []);


    return(
<div className="container my-3">
    <h1>Edit User</h1>
    <form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="" className="form-label">Current id</label>
    <input
        type="text"
        className="form-control"
        name="currentId"
        id="currentId"
        aria-describedby="helpId"
        placeholder=""
        defaultValue={currentUser.id}
        readOnly
    />
</div>

<div className="mb-3">
    <label htmlFor="" className="form-label">Full Name</label>
    <input
        type="text"
        className="form-control"
        name="fullName"
        id="fullName"
        aria-describedby="helpId"
        placeholder=""
        ref={fullName}
        defaultValue={currentUser.fullName}
    />
</div>
<div className="mb-3">
    <label htmlFor="" className="form-label">Country</label>
    <select
        className="form-select form-select-lg"
        name="country"
        id="country"
        ref={country}
        defaultValue={currentUser.country}
        key={currentUser.country}
    >
        <option value="Algeria">Algeria</option>
        <option value="JAPAN">JAPAN</option>
        <option value="Italy">Italy</option>
        <option value="South korea">South korea</option>
    </select>
</div>
<input
    name=""
    id=""
    className="btn btn-primary"
    type="submit"
    value="Update"
/>
</form>
</div>
    );
}