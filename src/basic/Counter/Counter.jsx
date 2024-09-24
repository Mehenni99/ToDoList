// import { Component } from "react";

import { useEffect, useState } from "react";

// export default class Counter extends Component{
//     constructor(props){
// super(props);
// this.state={
//     counter:0,
//     date:undefined,
// }
//     }
//     componentDidMount(){
//         setInterval( ()=>{
//      this.setState(
//             prevState=>{
//                 return {counter:prevState.counter+1}
//             }
//         )
//         },1000)
       
//     }
// render(){
//     return <div>
//         Il y a {this.state.counter} secondes
//     </div>
// }
// }

export default function Counter({initialValue,step}) {
    //hooks: useState(),useEffect()

    const [count,setCount]= useState(initialValue)
    const[age,setAge]=useState()
    useEffect(()=>{console.log('every render')})
    useEffect(()=>{console.log('component mounted!')},[])
    useEffect(()=>{console.log('age changd')},[age])
    return <div>
        <span>
           <button onClick={()=>{
            setCount(prevState=>{
                return prevState+step})
           }}>Click to increment</button>
           <button onClick={()=>{
            setCount(0) }}>Click to reset</button>
            il y a {count} secondes
        </span>
    </div>
}

