import Item from "./Item";

function ItemList({ products }) {
return (
    <div className="row">
    {products.map((product) => (
        <Item key={product.id} product={product} />
    ))}
    </div>
);
}

export default ItemList;
