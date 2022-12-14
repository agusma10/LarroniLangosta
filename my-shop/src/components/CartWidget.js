import { Link } from "react-router-dom"
import { useCart } from "./context/CartContext"


const CartWidget = ()=>{

    
    const {count}=useCart()

    return(<div className=" p-3 mb-5 bg-white rounded NavBarContainer">
        <Link to='/cart'>
            <button><img style={{whidth:"3rem", height:"2rem"}} alt="imagen carrito" src="../imagenes/cart.png"></img>{count}</button>
        </Link>
        </div>)
}

export default CartWidget
