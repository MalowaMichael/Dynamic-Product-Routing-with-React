import React, { useEffect } from 'react'
import product_data from '../ProductData'
import Card from './Card';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Categories = () => {
  //const categories = [...new Set(product_data.map((product) => product.category))];
  /**Lets note something here, we are getting existing product categories from the prodImages. It is possible that a category may appear several times depending on the number of items within.
   * Hence we use sets that's only capable of storing unique data to only store unique categories thus dispelling the duplicates. However, set is not an array hence we copy its content using the spread 
   * operator into an array to manipulate the returned data easily.
   */
  //console.log("Existing categories are: ", categories)
  
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const category = queryParams.get('category')

 useEffect(() =>{
  console.log('Category changed to:', category);

 }, [location.key])


/*
  //function for mapping the categories
  const arrayCategory = categories.map((category, index) => {
    return <NavLink to={`/categories?category=${category}`}>
      <h3 key={index} 
      
      className={({isActive}) =>{
        `text-2xl text-center cursor-pointer hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out 
        ${isActive} ? "text-[yellow] underline " : "text-gray-600 font-medium"`
      }}
    >{category}</h3>
    </NavLink>

  })  */


  //function to map the category products
const categoryItems = product_data.filter((categItem) => categItem.category === category)

  //         <div className='flex p-4 items-center justify-between bg-green-400 w-[100%]'>{arrayCategory}</div>

  return (
    <div className='overflow-y-hidden'>
         
         <div className='flex flex-wrap items-center justify-between gap-[1%] w-[98%] m-auto'>
                {categoryItems.map((product) =>{
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
}

export default Categories