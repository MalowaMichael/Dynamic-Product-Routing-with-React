import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <div className='flex items-center justify-between w-[90%] m-auto p-2 mt-[2%]   '>
        <img src= {product.image} alt="name" 
        className='h-[400px] w-[450px] rounded-xsm shadow-sm   '        />
      <div className='block w-[50%] items-center border-1px border-green-600 '>
        <div className='flex items-center justify-between gap-[2%] mt-0 '>
          <img src={product.image} alt={product.name} className='h-[120px] w-[150px] '/>
          <img src={product.image} alt={product.name} className='h-[120px] w-[150px] '/>
          <img src={product.image} alt={product.name} className='h-[120px] w-[150px] '/>
          <img src={product.image} alt={product.name} className='h-[120px] w-[150px] '/>
        </div>
        
        <h3 className='text-lg my-4 text-gray-600 font-medium text-wrap'>{product.name}</h3>

        <div className='flex items-center justify-between gap-[15%] py-1 w-[35%]'>
          <div className='text-lg font-medium text-gray-500 line-through'>KES {product.price_old}</div>
          <div className='text-lg font-medium text-gray-500 '>KES {product.price_new}</div>
        </div>

        <div className='flex items-center justify-between gap-[3%] cursor-default w-[50%] text-lg text-gray-600 hover:border-1px hover:border-gray-300 '>
          <div className='p-2 shadow-md rounded-sm text-lg font-medium w-[25%] text-center hover:shadow-lg'>S</div>
          <div className='p-2 shadow-md rounded-sm text-lg font-medium w-[25%] text-center hover:shadow-lg'>M</div>
          <div className='p-2 shadow-md rounded-sm text-lg font-medium w-[25%] text-center hover:shadow-lg'>L</div>
          <div className='p-2 shadow-md rounded-sm text-lg font-medium w-[25%] text-center hover:shadow-lg'>XL</div>
          <div className='p-2 shadow-md rounded-sm text-lg font-medium w-[25%] text-center hover:shadow-lg'>XXL</div>
        </div>
        
        <button className='text-lg bg-[green] w-[40%] mt-5 text-white p-3 my-2 hover:cursor-pointer hover:text-[yellow]'>Add to cart</button>
        
        <div className="flex items-start justify-between w-[50%] mt-[2%]">
          <div className="shadow-sm p-3 w-[50%] rounded-[2px] shadow-md hover:border-[1px] hover:border-gray-400 cursor-default hover:transition-all hover:ease-in-out hover:duration-400">Description</div>
          <div className="shadow-sm p-3 w-[40%] rounded-[2px] shadow-md hover:border-[1px] hover:border-gray-400 cursor-default hover:transition-all hover:ease-in-out hover:duration-400">Specification</div>
        </div>


      </div>
    </div>
  )
}

export default ProductDetails