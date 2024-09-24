
import useFetch from "../../hook/useFetch";



export default function UserList(){

const[users,errors]=useFetch('https://jsonplaceholder.typicode.com/users')
const displayItems =()=>{
console.log(errors)
if(users.length>0){
    return users.map((item,key)=><tr key={key}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
    </tr>)
    
}
return <tr><td>No items</td></tr>

}





   




    return (
        <div>
         <h1>User list</h1>
     <div
        className="table-responsive"
     >
        <table
            className="table table-default"
        >
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
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