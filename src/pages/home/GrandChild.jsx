import React from 'react'

import { useContext } from 'react'

import { Context } from './Home'

const GrandChild = () => {
  const data = useContext(Context)
  console.log(data);
  return (
    <div>
        <h3 className='text-2xl'>GrandChild: {data}</h3>
    </div>
  )
}

export default GrandChild