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
    
    className={({isActive}) =>{
      `text-2xl text-center cursor-pointer hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out 
      ${isActive} ? "text-[yellow] underline " : "text-gray-600 font-medium"`
    }}
  >{category}</h3>
  </NavLink>

}) 

  return (
    <div className='flex px-auto p-5  w-full items-center justify-between top-[0] sticky bg-[green] text-white text-2xl'>
      <div className=''>
        <p className='cursor-default'>Product | Routes</p>
      </div>

      <div id = "middle-section">
          <input type="text" placeholder='Search here...' className='bg-white text-gray-500 w-full p-1 border-[1.5px] border-[greenyellow] rounded-md hover:border-blue-500 focus:border-[none] focus:outline focus:outline-yellow-700 text-[18px]  '/>
      </div>

      <div className='bg-transparent w-1/4'>
        <ul className='flex items-center justify-between gap-[15%] p-2'>
          {tabs.map((tab, index) =>{
            return <li key={index} >
            <Link to={paths[index]}            
                key={index}
                className='relative cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[yellow] hover:text-[yellow] hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out   '
                onClick={() => setIsCategory(tab)}
            >{tab}
                      
            </Link>
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