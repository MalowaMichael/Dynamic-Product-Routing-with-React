import React from 'react'
import product_data from '../ProductData'
import Card from './Card';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [...new Set(product_data.map((product) => product.category))];
  /**Lets note something here, we are getting existing product categories from the prodImages. It is possible that a category may appear several times depending on the number of items within.
   * Hence we use sets that's only capable of storing unique data to only store unique categories thus dispelling the duplicates. However, set is not an array hence we copy its content using the spread 
   * operator into an array to manipulate the returned data easily.
   */
  //console.log("Existing categories are: ", categoriz)
  return (
    <div className='block items-center justify-between p-4 w-[90%] m-auto '>
         {categories.map((category) =>{
          const categoryProducts = product_data.filter((item) => item.category === category);
          
          return (
            <div className='block '>
              <h3 className='text-4xl font-medium text-gray-800 text-center'>{category}</h3>
              <div className='flex flex-wrap items-center justify-between gap-[1%] w-[98%]'>
                {categoryProducts.map((product) =>{
                 return <Link      
                    key={product.id} 
                    to = {`/product/${product.id}`}>
                    
                    <Card 
                      name={product.name} 
                      image={product.image} 
                      price_new={product.price_new} 
                      price_old={product.price_old}
                />
                 
                 </Link>
                })}
              

              </div>
            </div>
          )
         })}
              
    </div>
  )
}

export default Categories