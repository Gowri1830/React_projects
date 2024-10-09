import React from 'react'
import { Product } from './Product'

export const Home2 = ({uname}) => {
  return (
    <div>

        <h2> I am home component and my prop is {uname} </h2>
        <Product un = {uname} />
        
    </div>
  )
}
