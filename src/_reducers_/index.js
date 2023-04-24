import { combineReducers } from "redux";
import {  addSubRedFunc } from "./AddSubReducer";
import { MultiDivRedfunc } from "./MultiDivReducer";

export default combineReducers({
    // 1. Property Coloum Value
    //2. Importing the Method of Function
    addSubRedFunc:addSubRedFunc,
    MultiDivRedfunc:MultiDivRedfunc
})