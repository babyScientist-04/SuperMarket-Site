import React from 'react'
import SearchBar from '../search/SearchBar';

const Navbar = () => {
    const handleSearch = (query:string)=>{
        console.log(query)

    }

  return (
    <nav className="m-3">
        <SearchBar 
        palceholder="Search..."
        onSearch={handleSearch}/>
    </nav>
  )
}

export default Navbar