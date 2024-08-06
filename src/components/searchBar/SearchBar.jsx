import React, { useState } from 'react'
import './searchbar.scss'

const SearchBar = () => {
    const types = ['buy','price']
    const [query,setQuery]= useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    })
    const switchType = (val)=>{
        setQuery((prev)=>({...prev,type:val}))

    }
  return (
   <div className="searchbar">
    <div className="type">
        {types.map((type)=>(
            <button key={type} onClick={()=>switchType(type)} className={query.type===type ? "active":""}>{type}</button>
        ))}
       
    </div>
    <form action="">
        <input type="text" name="location"  placeholder='City Location' />
        <input type="number" name="minPrice" min={0} max={10000} placeholder='MinPrice' />
        <input type="number" name="maxPrice" min={0} max={10000}id="" placeholder='MaxPrice'/>
        <button>
            <img src="/search.png" alt="" />
        </button>
    </form>
   </div>
  )
}

export default SearchBar