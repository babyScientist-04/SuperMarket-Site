import React, { useState } from 'react'
import { Search} from 'lucide-react';


type SearchBarProps  = {
    palceholder: string,
    onSearch: (query:string)=>void
}

const SearchBar = ({palceholder,onSearch}:SearchBarProps) => {

    const [query, setQuery]= useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }
    const handleSubmit = ()=>{
        onSearch(query)
    }

  return (
    

    <div className="relative">
        

        <Search 
        size={12}
        className="absolute left-2 top-1/3 text-gray-500"
        onClick={handleSubmit}/>
        <input type="search"
        value={query}
        placeholder={palceholder}
        onChange = {handleChange}
        className="outline-gray-200 bg-gray-100 rounded-sm  w-1/3 h-7 px-6 "
        
        />


    </div>
  )
}

export default SearchBar