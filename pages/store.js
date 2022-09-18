import {configureStore} from '@reduxjs/toolkit'
import transactionSlice from './features/reducers';


const store = configureStore({
    reducer:{
        transaction:transactionSlice
    }
})

export default store;