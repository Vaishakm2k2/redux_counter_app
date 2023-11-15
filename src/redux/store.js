import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


 const store = configureStore({
    //reducer can only update value of state in store
    //reducer key is predefined (object which can hold more than one reducer)
    reducer:{
        //To create action files - createAction
        //To create reducer files - createReducer

        //reducer is coming from counterSlice since we export reducer as export default
        counter:counterSlice
    }
})

export default store 