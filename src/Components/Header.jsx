import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import product_data from '../ProductData'

const tabs = ["Home", "Categories"]
const paths = ["/", "/categories"]

const Header = () => {

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
    <div className=' md:flex w-[100%] m-auto px-auto top-[0] sticky bg-[green] text-white text-sm px-1 md:text-2xl'>
      <div className=''>
        <p className='cursor-default'>Product | Routes</p>
      </div>

      <div id = "middle-section">
          <input type="text" placeholder='Search here...' className='bg-white text-gray-500 w-full border-[1px] border-[greenyellow] px-2 my-1 rounded-full md:px-1 md:rounded-md hover:border-blue-500 focus:border-[none] focus:outline focus:outline-yellow-700  '/>
      </div>

      <div className='bg-transparent w-1/4'>
        <ul className='hidden md:flex md:items-center md:justify-between md:gap-[15%] p-2'>
          {tabs.map((tab, index) =>{
            return <li key={index} >
            <NavLink to={paths[index]}            
                key={index}
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
            {tab === "Categories" && isCategory === "Categories" && (
                    <div className='flex absolute top-full left-0 p-4 items-center justify-between bg-green-400 w-[100%]'>{arrayCategory}</div>

                  )}  
            </li>
          })}

          
        </ul>
       {/** {isCategory && (
        <div className='flex p-4 items-center justify-between bg-green-400 w-[100%]'>{arrayCategory}</div>
)} */}

      </div>
          
    </div>
  )
}

export default Header