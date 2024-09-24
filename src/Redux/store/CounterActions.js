import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../Reducers/counterReducer";

export const counterIncrement=(value)=>({
type:COUNTER_INCREMENT
})

export const counterdecrement=(value)=>({
    type:COUNTER_DECREMENT
    })