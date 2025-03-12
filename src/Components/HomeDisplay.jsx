import React from 'react'
import Card from './Card'
import prodImages from '../ProductData'
import { Link } from 'react-router-dom'


const HomeDisplay = () => {
  
  return (
    <div className='flex flex-wrap items-center justify-between gap-[1%] py-2 bg-yellow w-[98%] h-full mt-[1%] m-auto '>
      {prodImages.map((product) =>{
        return (<Link key={product.id} to = {`/product/${product.id}`}>
          <Card  
          id = {product.id} 
          name={product.name} 
          image = {product.image} 
          price_new={product.price_new} 
          price_old={product.price_old}/>
        </Link>
        )
      })}
    </div>
  )
}

export default HomeDisplay