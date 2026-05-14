
import {Heart} from 'lucide-react'

const WishlistButton = () => {
    const handleClick = ()=>{
        console.log("successfully added to wishlist")
    }
  return (
    <div>
        <Heart size={18}
        onClick={handleClick}/>
    </div>
  )
}

export default WishlistButton