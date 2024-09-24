// export default function Event(){
//    const handleClick = ()=> {
//     console.log('click')
//   }
//   return <div>
//     <button onClick={handleClick}>
//       click
//     </button>
//   </div>
// }

import { Component } from "react";

 
export class Evenement extends Component{
   handleClick = ()=> {
        console.log('click')
      }
  render(){
 
        return <div>
          <button onClick={this.handleClick}>
            click
          </button>
        </div>
  }
}
