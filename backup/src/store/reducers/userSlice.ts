import { createSlice } from "@reduxjs/toolkit";

interface userStateType {
    name:string;
    count:number
}

const initialState:userStateType = {
    name:"pravin",
    count:0
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        increment:(state:userStateType) =>{
            state.count = state.count + 1
        }
    }
})


export const {increment} = userSlice.actions;

export default userSlice.reducer