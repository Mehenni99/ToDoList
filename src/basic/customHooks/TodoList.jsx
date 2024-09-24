

import { useEffect } from "react";
import useFetch from "../hook/useFetch";


export default function TodoList(){


   const [todos,errors]=useFetch('https://jsonplaceholder.typicode.com/todos')
    const displayItems =()=>todos.slice(0,10).map((item,key)=><tr key={key}> 
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{
            item.completed ?
                <span className="badge badge-pill badge-primary bg-success">Completed</span>
                :
                <span className="badge badge-pill badge-danger bg-danger">Incomplete</span>
        }</td>
    </tr>)
       
    useEffect(()=>{
        console.log(errors)
    })
  
        return (
            <div>
             <h1>To do list</h1>
         <div
            className="table-responsive"
         >
            <table
                className="table table-default"
            >
                <thead>
                    <tr>
                        <th scope="col">userId</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Progress</th>
                    </tr>
                </thead>
                <tbody>
                  {displayItems()}
                </tbody>
            </table>
         </div>
         
            </div>
           
        );
}