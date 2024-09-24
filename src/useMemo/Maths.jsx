
import React, { useCallback, useMemo } from "react";

const expensiveCalcul=(value)=>{
    for (let i = 0; i < 1000; i++) {   
       value++ 
    }
    return value
    }

export default function Maths(){
const a=12

const calculate=useMemo(()=>{ 
   return (expensiveCalcul(a))
},[a])


return (
    <div>
       {calculate}
    </div>
);
}