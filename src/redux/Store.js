import { configureStore } from '@reduxjs/toolkit'
import cityReducer from "./SliceReducer/City.slice"


export const Store = configureStore({
    reducer:{
        action:cityReducer,
    }
})