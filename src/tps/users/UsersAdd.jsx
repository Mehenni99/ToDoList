import React, { useContext, useRef} from "react";
import { UsersContext } from "./UsersApp";


export default function UsersAdd({onAddUser}){
    const context=useContext(UsersContext)
const fullName=useRef(null)
const country=useRef(null)


const handleSubmit=(e)=>{
    e.preventDefault()
   
context.actions.addUser({
   payload:{
    fullName:fullName.current.value,
    country:country.current.value,
    id:context.lastId+1

   } 
})
fullName.current.value=''
country.current.value=''
}



    return(
<div className="container my-3">
    <h1>Add User</h1>
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
        value={context.lastId+1}
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
    />
</div>
<div className="mb-3">
    <label htmlFor="" className="form-label">Country</label>
    <select
        className="form-select form-select-lg"
        name="country"
        id="country"
        ref={country}
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
    value="Add"
/>
</form>
</div>
    );
}