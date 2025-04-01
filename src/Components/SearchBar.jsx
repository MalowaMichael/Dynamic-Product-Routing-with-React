import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = ({products}) => {
  const searchRef = useRef(null)
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([])
  const [searchList, setSearchList] = useState(false)
  const [clear, setClear] = useState(false)

  const handleSearcch = (e) => {
    setClear(!clear)
    setSearchList(!searchList)
    const srchQuery = e.target.value.toLowerCase()
    setSearch(srchQuery)

    const results = products.filter(item => item.name.toLowerCase().includes(srchQuery) || item.category.toLowerCase().includes(srchQuery))
    setFiltered(results)
  }

  const handleClear = () =>{
    setSearchList(false)
    searchRef.current.value=""
    setClear(false)
  }

  
  return (
    <div>
      <input type="text" ref={searchRef} onChange={handleSearcch} value={search} placeholder='Search here...' className='relative bg-white text-gray-500 w-full border-[1px] border-[greenyellow] px-2 my-1 rounded-full md:text-md md:px-1 md:rounded-sm hover:border-blue-500 focus:border-[none] focus:outline focus:outline-yellow-700  '/>

        {clear && (
                <span onClick={handleClear} className='absolute cursor-default text-black text-2xl transform -translate-x-8'>&times;</span>

        )}


      {searchList && (
        <ul className='bg-white text-black z-10 h-[50vh] overflow-y-auto'>
        {filtered.map((item) => (
          <Link to={`/product/${item.id}`}>
             <li onClick={() => setSearchList(false)} key={item.id} className='list-none list-inside cursor-default'>{item.name} ({item.category})</li>

          </Link>
        ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar