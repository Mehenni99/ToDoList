
 import { useEffect, useState } from "react";

const useFetch = (url,initialValue=[])=>{
    const[data,setData]=useState(initialValue)
    const[errors,setErrors]=useState([])

const setItems=()=>{
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()}
        return Promise.reject('problem!')
    })
    .then(response => setData(response))
    .catch(error=>setErrors(errors))
}
useEffect(()=>{
    setItems()
},[]);
return [data,errors]


 }

 export default useFetch;