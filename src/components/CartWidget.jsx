import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
const { cart } = useContext(CartContext);
const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

return (
    <Link to="/cart" className="btn btn-outline-dark">
    🛒 {totalItems > 0 && <span>({totalItems})</span>}
    </Link>
);
}

export default CartWidget;
