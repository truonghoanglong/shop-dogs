import {useContext} from "react"
import "./cart.css"
import { CartContext } from '../../Contexts/CartContext';
const Cart = () => {
    const {myCart,total,setMyCart,setTotal} =  useContext(CartContext);
    const handleCheckout = () => {
        setMyCart([{}]);
        setTotal(0);
    }
    return ( 
        <>
            <section className="cart-container">
                <div className="cart-header">Checkout: </div>
                <div className="cart-items">
                    
                    {myCart.slice(1).map((item)=>{
                        return(
                            <div className="cart-item">
                                <img src={item.imageUrl} alt=""  className="cart-item-img"/>
                                {item.name} : {item.price} $
                            </div>
                        )
                    })}
                    <div className="cart-total">TOTAL:{total}$</div>
                    <button className="cart-checkout" onClick={handleCheckout} >DONE</button>
                </div>
            </section>
        </>
     );
}
 
export default Cart;