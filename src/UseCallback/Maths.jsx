
import React, { useCallback } from "react";



export default function Maths(){
const a=12,b=13


const handleClick= useCallback(()=>{
    let result =a+b
    console.log(result)
return result
},[a,b])

return (
    <div>
        <button className="btn btn-primary" onClick={handleClick}>Calculate</button>
    </div>
);
}