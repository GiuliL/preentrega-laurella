import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const { productId } = useParams();

useEffect(() => {
    const fetchProduct = async () => {
    const docRef = doc(db, "productos", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
    } else {
        console.log("No se encontró el producto");
    }
    };

    fetchProduct();
}, [productId]);

return (
    <div className="container mt-4">
    {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
);
}

export default ItemDetailContainer;
