import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
