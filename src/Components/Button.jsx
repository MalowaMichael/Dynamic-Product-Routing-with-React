import React from 'react'

const Button = () => {
  return (
    <div>
      <button 
        className=' p-2 my-1 border-[1px] border-gray-400 w-[80%] bg-green-400 rounded-sm cursor-pointer shadow-md hover:shadow-md 
        hover:ring-green-600 hover:bg-green-600 hover:text-[yellow] hover:transition-all hover:duration-300 hover:ease-in-out'
      
      >View details</button>
    </div>
  )
}

export default Button