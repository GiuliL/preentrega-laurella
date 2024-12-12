import React from 'react';

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
        <div style={containerStyle}>
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
