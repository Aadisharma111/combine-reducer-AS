import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Page2() {
    let store = useSelector(store=>{
        console.log(store);
        return store.MultiDivRedfunc;
       // Return the Store Addition Substraction Reducer Function
        //Return the Assigend value
    });
    let dispatch = useDispatch()
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1>Page2</h1>
                <h1>{store.value}</h1>
                <button onClick={()=>{  dispatch({ type:"MULTIPLYBY2",payload:2}) }}>*2</button>
                <button onClick={()=>{  dispatch({ type:"MULTIPLYBY5",payload:5}) }}>*5</button>
                <button onClick={()=>{  dispatch({ type:"RESET",payload:0}) }}>Reset</button>
                <button onClick={()=>{  dispatch({ type:"DIVISONBY2",payload:2}) }}>/2</button>
                <button onClick={()=>{  dispatch({ type:"DIVISONBY5",payload:5}) }}>/5</button>
            </div>
        </>
    )
}
