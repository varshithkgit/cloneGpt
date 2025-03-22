import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const  Store= configureStore({
    reducer:{
        slice1:sliceReducer
    }
})

export default Store;