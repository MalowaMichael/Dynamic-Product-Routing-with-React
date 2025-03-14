import React from 'react'
import product_data from '../ProductData'
import Card from './Card'
import { Link } from 'react-router-dom'


const HomeDisplay = () => {
  console.log("Loaded Products: ", product_data);

  return (
    <div className='grid bg-white grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-start md:gap-[1%] md:py-2 md:w-full md:h-full mt-[1%] m-auto '>
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