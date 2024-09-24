import {createSlice} from '@reduxjs/toolkit'

const user={
    name:'amel',
    country:'algeria',
    age:28
}
export const userSlice=createSlice({
name: 'user',
initialState:user,
reducers:{
    user:{
        restUser:(state)=>{

        },
        updateUser:(state)=>{
            
        }
    }
}
})

export default userSlice.reducer