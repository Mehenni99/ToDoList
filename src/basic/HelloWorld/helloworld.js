// export default function HelloWorld({lastName}){
//     const age=20
//     // let isAdult=false
//     // if(age>=18){
//     // isAdult=true
//     // }if (isAdult) {
//     //     return <h1>Hello {lastName} Adult</h1>
//     // }else{
//     //     return <h1>Hello {lastName} Minor </h1>
//     // }
//     /**** avec jsx */
//     return <h1>hello{lastName} {age>=18?'Adult':'Minor'}</h1>
// }




import {Component} from "react";
export default class helloworld extends Component{
   

    age=29
    render(){
    return <h1>Hello {this.props.lastName} {this.age>=18?'Adult':'minor'}</h1>
}
}