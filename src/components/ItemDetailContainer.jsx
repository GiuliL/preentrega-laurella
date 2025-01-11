import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        
        const asyncMock = [
            { id: 1, name: 'Lentejas', description: 'Ricas y nutritivas', category: 'legumbres' },
            { id: 2, name: 'Almendras', description: 'Buenas para la salud', category: 'frutos-secos' },
            { id: 3, name: 'Avena', description: 'Ideal para desayunos', category: 'cereales' },
        ];

        const foundItem = asyncMock.find(item => item.id === parseInt(itemId));
        setTimeout(() => {
            setItem(foundItem);
        }, 1000);
    }, [itemId]);

    return (
        <div>
            {item ? (
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Categoría: {item.category}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
