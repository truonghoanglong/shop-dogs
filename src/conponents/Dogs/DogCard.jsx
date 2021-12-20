import {useState,useContext} from 'react'
import "./dog.css"
import { CartContext } from '../../Contexts/CartContext';
const DogCard = (props) => {
    const {name,breed,description,imageUrl,price} = props;
    const {setMyCart,setTotal} = useContext(CartContext);
    const [isAdded,setAdd] = useState(true);
    const handleBuy = () =>{
        setAdd(false);
        const newItems = {
            name: name,
            price:price,
            imageUrl:imageUrl,
        };
        setMyCart((item)=>[...item,newItems]);
        setTotal((total)=>(total+=Number(price)))
    }
    return ( 
        <>  
            <section className="dogs">
                <div className="dog-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img className="dog-img" src={imageUrl} alt="none" />
                </div>
                <div className="dogs-desc">
                    {description}
                </div>
                <div className="dogs-price">
                    {price}$
                </div>
                {isAdded ? (
                    <button className="dogs-btn" onClick={()=>handleBuy()}>
                        ADD TO CARD
                    </button>
                ) : (
                    <button disabled className="dogs-btn-disabled" onClick={()=>handleBuy()}>
                        ADDER
                    </button>
                )}
                
            </section>
        </>
     );
}
 
export default DogCard;