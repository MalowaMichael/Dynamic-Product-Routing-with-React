import React, { useEffect } from 'react'
import Categories from '../Components/Categories'
import { useLocation } from 'react-router-dom'

const Category = () => {
 /*const location = useLocation()
 const queryParams = new URLSearchParams(location.search)
 const category = queryParams.get('category')

 useEffect(() =>{
  console.log('Category changed to:', category);

 }, [location.key])*/

 //const item = categories.find((e) => e.category === category)

  return (
    <div className=''>
      <Categories/>
    </div>
  )
}

export default Category