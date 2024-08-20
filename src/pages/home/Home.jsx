import React, {useState, useEffect} from 'react'
import Child from './Child'
import { createContext } from 'react'
import axios from '../../api'
import { useFetch } from '@/hooks/useFetch'
import Products from '@/components/products/Products'

export const Context = createContext()

const Home = () => {
  const {data} = useFetch("/products")
  console.log(data);
  return (
    <div>
      <h2 className='text-center text-4xl'>Home</h2>
      <Products title={"New products"}/>
    </div>
  )
}


export default Home