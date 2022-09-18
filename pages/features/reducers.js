import {createSlice} from '@reduxjs/toolkit'

const initialState={
    data:[]
}

const transactionSlice = createSlice({
    name:'transaction',
    initialState,
    reducers:{
        transaction:(state,action)=>{
            state.data.push(action.payload)
        }
    }
})


export const {transaction} = transactionSlice.actions
export default transactionSlice.reducer