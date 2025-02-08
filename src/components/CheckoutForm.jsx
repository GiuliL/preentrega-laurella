import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
const { cart, clearCart, totalItems } = useContext(CartContext);
const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
const [orderId, setOrderId] = useState(null);
const navigate = useNavigate();

const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!buyer.name || !buyer.email || !buyer.phone) {
    alert("Por favor, completa todos los campos.");
    return;
    }

    const order = {
    buyer,
    items: cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: new Date().toISOString(),
    };

    try {
    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);
    clearCart();
    } catch (error) {
    console.error("Error al procesar la orden:", error);
    }
};

if (orderId) {
    return (
    <div className="container mt-5 text-center">
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
    );
}

return (
    <div className="container mt-5">
    <h2>🛍️ Finalizar Compra</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="name" value={buyer.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={buyer.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input type="tel" className="form-control" name="phone" value={buyer.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Confirmar Compra</button>
    </form>
    </div>
);
}

export default CheckoutForm;
