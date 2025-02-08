import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <Link className="navbar-brand" to="/">El Molino</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/category/frutos-secos">Frutos Secos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/legumbres">Legumbres</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/cereales">Cereales</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/cosmetica-natural">Cosmética Natural</Link>
            </li>
        </ul>
        </div>
        <CartWidget />
    </div>
    </nav>
);
}

function CartWidget() {
    const { totalItems } = useContext(CartContext);
    
    return (
        <Link to="/cart" className="btn btn-outline-light">
        🛒 {totalItems > 0 && <span>({totalItems})</span>}
        </Link>
    );
    }

export default NavBar;
