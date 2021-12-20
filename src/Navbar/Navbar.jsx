import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
    return ( 
        <>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/dogs">Dog</Link>
                <Link to="/checkout">Cart</Link>    
            </div>
        </> 
    );
}
 
export default Navbar;