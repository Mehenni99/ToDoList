export default function TextField({children,inputLabel}){
    return(
<>
    <label>{inputLabel}</label>
    <input type='text'/>
    <div>{children}</div>
</>
    ) 
}