import React from 'react'

const ProductDetails = ({product}) => {

  return (
    <div className='flex flex-col p-2 gap-y-4 md:flex md:bg-transparent md:flex-row md:flex-nowrap md:items-center md:justify-between md:w-[94%] m-auto mt-[2%]   '>
        <div className='bg-transparent md:[80%] lg:w-[40%] md:p-2'>
        <img src= {product.image} alt="name" 
        className='w-full m-auto object-cover md:h-[70%] lg:h-[50%] md:w-[90%] rounded-xsm shadow-sm   '        />
      
        </div>
      
      <div className='block bg-transparent shadow-xs w-full m-auto md:w-[60%] items-center '>
        <div className='flex flex-wrap justify-start gap-[2%] md:flex md:flex-wrap md:items-center md:justify-start '>
          <img src={product.image} alt={product.name} className='w-[70px] mt-[2%] sm:w-[160px] md:h-[120px] md:w-[110px] '/>
          <img src={product.image} alt={product.name} className='w-[70px] mt-[2%] sm:w-[160px] md:h-[120px] md:w-[110px] '/>
          <img src={product.image} alt={product.name} className='w-[70px] mt-[2%] sm:w-[160px] md:h-[120px] md:w-[110px] '/>
          <img src={product.image} alt={product.name} className='w-[70px] mt-[2%] sm:w-[160px] md:h-[120px] md:w-[110px] '/>
        </div>
        
        <h3 className='text-md font-medium my-2 text-wrap text-gray-600 md:text-lg md:my-4 md:font-medium '>{product.name}</h3>
        <p className='text-red-500 font-medium'>The category is: {product.category}</p>

        <div className='flex m-auto mb-4 items-center justify-start md:justify-between gap-[10%] py-1 md:w-[35%]'>
          <div className='text-md font-medium line-through text-[red] md:text-lg md:text-gray-500 '>KES {product.price_old}</div>
          <div className='text-md font-medium md:text-lg text-gray-700 '>KES {product.price_new}</div>

        </div>

        <div className='flex items-center justify-between gap-[3%] sm:justify-start cursor-default  text-lg text-gray-600 md:w-[80%] medium:gap-[5%] md:bg-[transparent] lg:w-[50%] hover:border-1px hover:border-gray-300  '>
          <div className='p-1 text-sm font-medium sm:w-[10%] sm:py-2 md:px-3 shadow-md rounded-sm md:text-lg md:font-medium text-center hover:shadow-lg'>S</div>
          <div className='p-1 text-sm font-medium sm:w-[10%] sm:py-2 md:px-3 shadow-md rounded-sm md:text-lg md:font-medium text-center hover:shadow-lg'>M</div>
          <div className='p-1 text-sm font-medium sm:w-[10%] sm:py-2 md:px-3 shadow-md rounded-sm md:text-lg md:font-medium text-center hover:shadow-lg'>L</div>
          <div className='p-1 text-sm font-medium sm:w-[10%] sm:py-2 md:px-3 shadow-md rounded-sm md:text-lg md:font-medium text-center hover:shadow-lg'>XL</div>
          <div className='p-1 text-sm font-medium sm:w-[10%] sm:py-2 md:px-3 shadow-md rounded-sm md:text-lg md:font-medium text-center hover:shadow-lg'>XXL</div>
        </div>
        
        <button className='text-white p-1 text-md font-normal w-full m-auto sm:w-md sn:m-auto md:text-lg bg-[green] md:p-3 my-4 md:w-[50%] hover:cursor-pointer hover:text-[yellow]'>Add to cart</button>
        
        <div className="flex items-start mt-[2%] md:justify-between md:w-[90%] md:bg-[transparent] ">
          <div className="shadow-sm p-3 w-[50%] rounded-[2px] shadow-md hover:border-[1px] hover:border-gray-400 cursor-default hover:transition-all hover:ease-in-out hover:duration-400">Description</div>
          <div className="shadow-sm p-3 w-[40%] rounded-[2px] shadow-md hover:border-[1px] hover:border-gray-400 cursor-default hover:transition-all hover:ease-in-out hover:duration-400">Specification</div>
          <div className="shadow-sm p-3 w-[50%] rounded-[2px] shadow-md hover:border-[1px] hover:border-gray-400 cursor-default hover:transition-all hover:ease-in-out hover:duration-400">Reviews</div>

        </div>


      </div>
    </div>
  )
}

export default ProductDetails