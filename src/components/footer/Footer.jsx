import React from 'react'
import { useReducer } from 'react'

const initialState = {
  son: 0
}

const reducer = (state, action) =>{
  if(action.type == 'INC'){
    return {...state, son: state.son + 1}
  }
  if(action.type == 'DEC'){
    return {...state, son: state.son - 1}
  }
  if(action.type == 'RES'){
    return {...state, son: state.son = 0}
  }

}

const Footer = () => {
  const [data, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='h-60 bg-slate-900 text-white'>
        <h2>Counter {data.son}</h2>
        <button className='bg-lime-300 py-2 px-4 rounded-full' onClick={() => dispatch({type: "INC"})}>Increment</button>
        <button className='bg-lime-300 py-2 px-4 rounded-full' onClick={() => dispatch({type: "RES"})}>Reset</button>
        <button disabled={data.son <= 0} className='bg-lime-300 py-2 px-4 rounded-full' onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    </div>
  )
}

export default Footer