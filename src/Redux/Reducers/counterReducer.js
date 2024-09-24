export const COUNTER_INCREMENT='counter/increment'
export const COUNTER_DECREMENT='counter/decrement'

export const CounterReducer=(state={value:0},action)=>{
    switch (action.type) {
        case 'counter/increment':return{value: state.value +1}
        case 'counter/decrement':return{value: state.value -1}
        default:
       return state
    }
}