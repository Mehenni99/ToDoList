import { useState } from "react"

export default function Form(){
    const[name,setName]=useState()
    const[age,setAge]=useState()

    const handleNameInputChange=()=>{
const name=document.querySelector('#name').value
setName(name)
    }
    const handleAgeInputChange=()=>{
        const age=document.querySelector('#age').value
        setAge(age)
            }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({
            name,
            age
        })
    }
    return<div>
        <form>
            <input type="text" onChange={handleNameInputChange} id="name"  />
            <input type="number " onChange={handleAgeInputChange} id="age"  />
            <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
}