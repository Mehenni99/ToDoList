 import React, { useCallback } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
 import {COUNTER_DECREMENT,COUNTER_INCREMENT} from "./Reducers/counterReducer"
import { CounterSelector } from './store/CounterSelector';
import { counterdecrement, counterIncrement } from './store/CounterActions';



 export default function Counter ({counter,onIncrement,onDecrement}){
  

    return(
<div className="my-5">
    <div className='text-center my-2'>
        {counter}
    <span className='badge badge-primary'></span>
    </div>
    <div className='btn-group' role='group' aria-label='Basic example'>
        <button type="button" className='btn btn-primary' onClick={onIncrement}>Increment</button>
        <button type="button" className='btn btn-primary' onClick={onDecrement}>decrement</button>
    </div>
</div>
    );
 }


export function CounterStore(){
      
    const selector=useSelector(CounterSelector)
    const dispatch=useDispatch()
    const increment=useCallback(()=>dispatch(counterIncrement()),[])
    const decrement=useCallback(()=>dispatch(counterdecrement()),[])
    return <div>
        <Counter onIncrement={increment} onDecrement={decrement} counter={selector}/>
    </div>
}