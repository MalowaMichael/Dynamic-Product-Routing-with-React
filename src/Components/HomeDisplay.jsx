import React from 'react'
import product_data from '../ProductData'
import Card from './Card'
import { Link } from 'react-router-dom'


const HomeDisplay = () => {
  console.log("Loaded Products: ", product_data);

  return (
    <div className='flex flex-wrap items-center justify-between gap-[1%] py-2 bg-yellow w-[98%] h-full mt-[1%] m-auto '>
      {product_data.map((product) =>(
        <Link key={product.id} to={`/product/${product.id}`}>
        <Card 
          name={product.name}
          image={product.image}
          price_new={product.price_new}
          price_old={product.price_old}
        
        />
      </Link>
      )
        
      )}
    </div>
  )
}

export default HomeDisplay