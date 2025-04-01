import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import product_data from '../ProductData'
import SearchBar from './SearchBar'

const tabs = ["Home", "Categories"]
const paths = ["/", "/categories"]

const Header = ({products}) => {

  const [isCategory, setIsCategory] = useState("Men")

  const categories = [...new Set(product_data.map((product) => product.category))];

//function for mapping the categories
const arrayCategory = categories.map((category, index) => {
  return <NavLink to={`/categories?category=${category}`}>
    <h3 key={index} 
        className={({isActive}) =>
        isActive
        ?
        "text-[yellow] underline"
        : 'relative cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[yellow] hover:text-[yellow] hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out'
        }     
  >{category}</h3>
  </NavLink>

}) 

  return (
    <div className=' grid grid-cols-3 h-[70px] p-2 gap-5 w-[100%] m-auto top-[0] sticky bg-[green] text-white text-sm px-1 md:text-2xl'>
      <div className='border-none '>
        <p className='cursor-default text-center'>Product | Routes</p>
      </div>

      <div id = "middle-section" className='border-none'>
        <SearchBar products={products}/>
      </div>

      <div className='bg-transparent '>
        <ul className='hidden border-none md:flex md:justify-end md:gap-[15%] p-2'>
          {tabs.map((tab, index) =>{
            return <li key={index} >
            <NavLink to={paths[index]}            
                //className='relative cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[yellow] hover:text-[yellow] hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out   '
                
                className={({isActive}) =>
                  isActive
                  ?
                  "text-[yellow] underline"
                  : 'relative cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[yellow] hover:text-[yellow] hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out'
              } 
                onClick={() => setIsCategory(tab)}
            >{tab}
                      
            </NavLink>
            {isCategory === "Categories" && (
                    <div className='flex absolute top-full left-0 p-4 items-center justify-between bg-green-400 w-[100%]'>{arrayCategory}</div>

                  )}  
            </li>
          })}

          
        </ul>
       

      </div>
          
    </div>
  )
}

export default Header