import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebaseConfig";
import ItemList from "./ItemList";

function ItemListContainer() {
const [products, setProducts] = useState([]);
const { categoryId } = useParams();

useEffect(() => {
    const fetchProducts = async () => {
    const productosRef = collection(db, "productos");
    let consulta = categoryId
        ? query(productosRef, where("category", "==", categoryId))
        : productosRef;

    const querySnapshot = await getDocs(consulta);
    setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
}, [categoryId]);

return (
    <div className="container mt-4">
    <h2>{categoryId ? `Categoría: ${categoryId.replace("-", " ")}` : "Nuestros Productos"}</h2>
    <ItemList products={products} />
    </div>
);
}

export default ItemListContainer;

