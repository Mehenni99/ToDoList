import React from 'react'
import { useContext } from 'react';
import { UsersContext } from './UsersApp';
import { Link } from 'react-router-dom';
  

export default function UsersTable(){
    const context=useContext(UsersContext)
    return (<>
    <h1>Users</h1>
    <div
        className="table-responsive"
    >
        <table
            className="table table-default"
        >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                (context.users?.length>0)?context.users.map((user,key)=><tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.country}</td>
                        <td>
                            <Link to={`/user/${user.id}/edit`} className='btn btn-primary mx-1'>Update</Link>
                            <Link to={`/user/${user.id}/delete`} className='btn btn-danger mx-1'>Delete</Link>
                        </td>
                </tr>):<tr><td colSpan={3} align={"center"}>No items</td></tr>
                }
            </tbody>
        </table>
    </div>
    
    </>

    );
        
 
}