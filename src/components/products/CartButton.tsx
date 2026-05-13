import {ShoppingCart} from 'lucide-react'

const CartButton = () => {
    const handleClick = ()=>{
        console.log("I am opening the cart page now, please wait...")
    }
  return (
    <div>
        <ShoppingCart size={18}
        onClick={handleClick}/>
        
    </div>
  )
}

export default CartButton