import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./src/components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
return (
    <Router>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
    </Router>
);
}
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const productos = [
{ name: "Almendras", category: "frutos-secos", price: 1200 },
{ name: "Nueces", category: "frutos-secos", price: 1500 },
{ name: "Pasas de uva", category: "frutos-secos", price: 800 },

{ name: "Lentejas", category: "legumbres", price: 500 },
{ name: "Garbanzos", category: "legumbres", price: 700 },
{ name: "Porotos negros", category: "legumbres", price: 600 },

{ name: "Avena", category: "cereales", price: 450 },
{ name: "Quinoa", category: "cereales", price: 1300 },
{ name: "Arroz integral", category: "cereales", price: 750 },

{ name: "Jabón artesanal", category: "cosmetica-natural", price: 900 },
{ name: "Shampoo sólido", category: "cosmetica-natural", price: 1400 },
{ name: "Crema hidratante", category: "cosmetica-natural", price: 1600 },
];

const subirProductos = async () => {
const productosRef = collection(db, "productos");
for (const producto of productos) {
    await addDoc(productosRef, producto);
}
console.log("Productos agregados a Firestore");
};

subirProductos();
