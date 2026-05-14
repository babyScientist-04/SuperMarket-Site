import React, { useState } from 'react'
import { Search} from 'lucide-react';


type SearchBarProps  = {
    placeholder: string,
    onSearch: (query:string)=>void
}

const SearchBar = ({placeholder,onSearch}:SearchBarProps) => {

    const [query, setQuery]= useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }
    const handleSubmit = ()=>{
        onSearch(query)
    }

  return (
    

    <div className="relative w-1/3">
        

        <Search 
        size={12}
        className="absolute left-2 top-1/3 text-gray-500"
        onClick={handleSubmit}/>
        <input type="search"
        value={query}
        placeholder={placeholder}
        onChange = {handleChange}
        className="outline-gray-200 bg-gray-100 rounded-sm text-xs  w-full h-7  px-6 "
        
        />


    </div>
  )
}

export default SearchBar