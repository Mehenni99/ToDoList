import { useRef, useState } from "react"

export default function FormValidationBeginner() {
    const fieldName=useRef()
    const fieldEmail=useRef()
    const fieldMessage=useRef()
    const fieldCountry=useRef()
    const fieldAcceptCondition=useRef()
const [errors,setErrors]=useState([])
const validateForm=()=>{
    
     const nameValue= fieldName.current.value
     const emailValue=fieldEmail.current.value
     const messageValue=fieldMessage.current.value
     const countryValue=fieldCountry.current.value
     const acceptConditionValue=fieldAcceptCondition.current.checked
   let isFormValid=true
     if(nameValue.trim()===''){
      setErrors(prevState=>{
return [...prevState,'Name required']
      })
    isFormValid=false
}
if(emailValue.trim()===''){
    setErrors(prevState=>{
return [...prevState,'Email required']  
    })
  isFormValid=false
}else if(!emailValue.match(/^\S+@\S+\.\S+S/)){
    setErrors(prevState=>{
        return [...prevState,'Email format is not valid']
            })
            isFormValid=false
}
if(messageValue.trim()===''){
    setErrors(prevState=>{
return [...prevState,'message required']
    })
  isFormValid=false
}
if(countryValue.trim()===''){
    setErrors(prevState=>{
return [...prevState,'country required']
    })
  isFormValid=false
}
if(!acceptConditionValue){
    setErrors(prevState=>{
return [...prevState,'Accept conditions  required']
    })
  isFormValid=false
}
return isFormValid
}
const handleContact=(e)=>{
    setErrors([])
e.preventDefault()
validateForm()
}




     return <div className="container my-5">   
{errors.length > 0 ?
<div className="alert alert-danger" role="alert"  >    
        <strong>Error</strong> 
        <ul>
            {errors.map((errors,key)=><li key={key}>{errors}</li>)}
        </ul>
    </div>
    :''}
        <form onSubmit={handleContact}>
        
        <h1>Contact us</h1>
       <div className="mb-3">
        <label className="form-label" >Name</label>
        <input
            type="text"
            className="form-control"
            name="name"
            id=""
            aria-describedby="helpId"
            placeholder=""
            ref={fieldName}
        />
       </div>
       <div className="mb-3">
        <label className="form-label" >Email</label>
        <input
            type="email"
            className="form-control"
            name="email"
            id=""
            aria-describedby="helpId"
            placeholder=""
            ref={fieldEmail}
        />
       </div>
       <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" id="" rows="3" ref={fieldMessage}></textarea>
        </div>
       <div className="form-group">
            <label>Country</label>
            <label htmlFor="country"></label>
                <select
                    className="form-control"
                    name=""
                    id="country"
                    ref={fieldCountry}
                >
                    <option value="A">Algeria</option>
                    <option value="F">France</option>
                    <option value="J">Japan</option>
                    <option value="T">Tunisia</option>
                </select>
        
            
        </div>
        <div className="form-check">  
             <input type="checkbox" id="acceptCondition" className="form-check-input" ref={fieldAcceptCondition} />
             <label htmlFor="accept" className="form-check-label">Accept our rules</label>
        </div>
        <div className="form-group">
       <button className="btn btn-primary" type="submit">Envoyer</button>
        </div>
        
</form>
</div>
  
}