import {createSlice} from "@reduxjs/toolkit";
import {city} from "../../getapi/Database";


const initialState = city;

export const CitySlice = createSlice({
    name:"cityAction",
    initialState,
    reducers:{}
})



export default CitySlice.reducer;