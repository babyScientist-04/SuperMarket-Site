import React from 'react'
import SearchBar from '../search/SearchBar';
import { ShoppingBag} from 'lucide-react';
import CartButton from '../products/CartButton';
import WishlistButton from '../products/WishlistButton';
import ProfileButton from '../products/ProfileButton';

const Navbar = () => {
    const handleSearch = (query:string)=>{
        console.log(query)

    }

  return (
    <nav className="m-2 flex gap-4 items-center justify-between ">
      <div className=" flex  items-center gap-1">
        <ShoppingBag className="bg-primary p-2 w-8 h-8 rounded-sm"/>
        <p className="font-medium">Shoprite <span className="text-gray-600 font-light">Mini</span></p>
      </div>

        <SearchBar 
        placeholder="Search..."
        onSearch={handleSearch}/>

      <div className="flex items-center gap-4">
        <WishlistButton/>
        <CartButton/>
        <ProfileButton/>
      </div>
    </nav>
  )
}

export default Navbar