import React from 'react'
import { Link } from 'react-router-dom'

const tabs = ["Home", "Categories"]
const paths = ["/", "category"]
const Header = () => {
  return (
    <div className='flex px-auto p-5  w-full items-center justify-around top-[0] sticky bg-[green] text-white text-2xl'>
      <div className=''>
        <p className='cursor-default'>Product | Routes</p>
      </div>
      <div className='bg-transparent w-1/4'>
        <ul className='flex items-center justify-between gap-[15%] p-2'>
          {tabs.map((tab, index) =>{
            return <Link key={tab} to={paths[index]}>
            <li key = {tab.id} 
            className='relative cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-[yellow] hover:text-[yellow] hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out   '
            >
                {tab}
            </li>

            </Link>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header