import React from 'react';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../path/to/products';


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
       
        const asyncMock = [
            { id: 1, name: 'Lentejas', category: 'legumbres' },
            { id: 2, name: 'Almendras', category: 'frutos-secos' },
            { id: 3, name: 'Avena', category: 'cereales' },
        ];

        const filteredItems = categoryId
            ? asyncMock.filter(item => item.category === categoryId)
            : asyncMock;

        setTimeout(() => {
            setItems(filteredItems);
        }, 1000);
    }, [categoryId]);

const { categoryId } = useParams();
const filteredProducts = categoryId 
    ? products.filter(product => product.category === categoryId)
    : products;


 const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        padding: '20px',
        margin: '20px auto',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        fontFamily: 'Arial, sans-serif',
        color: '#5a504d',
    };

    return (
        <div>
            <h2>{greeting}</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;

