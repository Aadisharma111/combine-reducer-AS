import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Page1() {
    let store = useSelector(store=>{
        console.log(store);
        return store.addSubRedFunc;
    });
    let dispatch = useDispatch();
    return (
      <>
        <div style={{textAlign: 'center'}}>
                { console.log(store.value)}
                <h1>Page1</h1>
                <h1>{store.fname}</h1>
                <h1>{store.value}</h1>
                <button onClick={()=>{  dispatch({ type:"SUB",payload:1}) }}>-</button>
                <button onClick={()=>{  dispatch({ type:"RESET",payload:0}) }}>Reset</button>
                <button onClick={()=>{  dispatch({ type:"ADD",payload:1}) }}>+</button>
        </div>
      </>
    );
}