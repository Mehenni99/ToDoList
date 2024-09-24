import { useEffect, useRef, useState} from "react"

export default function Forms(){
     const inputNameRef=useRef()
     const inputAgeRef=useRef()
     const countryRef=useRef()
     const acceptref=useRef()
     const {formValue,setFormValue}=useState()


useEffect(()=>{
    inputNameRef.current.value='amel'
    inputAgeRef.current.value='24'
    countryRef.current.value='A'
},[]

)

    const handelSubmit=(e)=>{ 
            e.preventDefault()
            setFormValue({
                name:inputNameRef.current.value,
                age:inputAgeRef.current.value,
                country:countryRef.current.value
            })
         
    }
  

    return <div className="container my-4">
      
    <form action="">
        <div className="form-group">
            <label>Name</label>
             <input type="text" id="name" className="form-control" ref={inputNameRef} />
        </div>
        <div className="form-group">
            <label>Age</label>
             <input type="text" id="age" className="form-control" ref={inputAgeRef} />
        </div>

        <div className="form-group">
            <label>Country</label>
            <label htmlFor="country"></label>
                <select
                    className="form-control"
                    name=""
                    id="country"
                    ref={countryRef}
                >
                    <option value="A">Algeria</option>
                    <option value="F">France</option>
                    <option value="J">Japan</option>
                    <option value="T">Tunisia</option>
                </select>
        
            
        </div>

        <div className="form-check">  
             <input type="checkbox" id="acceptCondition" className="form-check-input" ref={acceptref}/>
             <label htmlFor="accept" className="form-check-label">Accept our rules</label>
        </div>
        
        <div className="form-group">
            <button onClick={handelSubmit}
            className="btn btn-primary">Save</button>
        </div>
    </form>
    
    
    
    </div>
}