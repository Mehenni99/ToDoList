import React, { useContext } from "react";
import { UsersContext } from "./UsersApp";
import { useParams } from "react-router-dom";


export default function UsersDelete(){
    const context=useContext(UsersContext)
 const param=useParams()

const handleSubmit=(e)=>{
    e.preventDefault()
   
context.actions.deleteUser({
   payload:{
  
    id:param.id

   } 
})
}



    return(
<>
<input
    name=""
    id=""
    className="btn btn-danger"
    type="submit"
    value="Delete"
    onClick={handleSubmit}
/>

</>
    );
}