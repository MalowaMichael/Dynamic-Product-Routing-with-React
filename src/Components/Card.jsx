import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


const Card = ({image, name, price_old, price_new}) => {
  
  return <div className='w-[90%] m-auto my-2 px-auto rounded-xs shadow-md  p-1 cursor-pointer md:rounded-sm md:shadow-md md:min-h-[300px] md:w-70 md:my-4 '>
      <img src={image} 
        className=' md:w-[290px] md:h-[290px] md:w-xsm m-auto'

      />
      <h5 className='text-[14px] line-clamp-1 text-ellipsis sm:w-full sm:text-[18px] text-gray-500 sm:font-medium py-2'>{name}</h5>
      
      <div className='flex items-start gap-[20%] text-xs text-gray-700 md:mb-3'>
        <div className='line-through text-[red]'>KES {price_new}</div>
        <div className=''>KES {price_old}</div>

      </div>

      <Button/>
      
  </div>
}

export default Card
