import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement } from "./redux/action/CountAction"




function Child ()  {
    const  count  = useSelector((store)=> store)
    const dispatch =useDispatch()
  return (
    <>
     
    <div>
        
    <h1 style={{ textAlign: 'center', marginBottom: '20px' , color:"red"}}>THIS IS OUR REDUX CONSUMER</h1>
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => dispatch(increment())}>+</button>
                <h1 style={{ display: 'inline-block', margin: '0 5px', color:"blue" }}>{count}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

    </div>
    </>
  )
}

export default Child

