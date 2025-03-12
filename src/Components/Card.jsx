import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


const Card = ({image, name, price_old, price_new}) => {
  return <div className='p-2 cursor-pointer rounded-sm shadow-md min-h-[300px] w-70 my-4 '>
      <img src={image} 
        className='w-[290px] h-[290px] w-xsm m-auto'

      />
      <h5 className='w-full text-ellipsis line-clamp-1 text-[18px] text-gray-500 font-medium py-2'>{name}</h5>
      
      <div className='flex mb-3 items-start gap-[20%] text-xl text-gray-700'>
        <div className='line-through line-red-700'>KES {price_new}</div>
        <div className=''>KES {price_old}</div>
      </div>

      <Button/>
      
  </div>
}

export default Card
