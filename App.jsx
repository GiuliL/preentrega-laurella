import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a la tienda" />
        </div>
    );
}

export default App;

