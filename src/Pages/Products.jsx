import React from 'react'
import ProductDetails from '../Components/ProductDetails'
import { useParams } from 'react-router-dom'

function Products({products}) {
  
  const {itemID} = useParams()
  const product = products.find((item) => item.id === itemID)
  if (!product) {
    return <div>Product not found</div>
  }
 //console.log("Extracted product id: ", itemID)
 return (
    <div>
      <ProductDetails product = {product}/>
    </div>
  )
}

export default Products