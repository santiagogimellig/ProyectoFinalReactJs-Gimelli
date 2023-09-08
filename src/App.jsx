import React, { useEffect } from 'react';
import { NavBar } from './components/NavBar'; 
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/firebase';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout';

function App() {
    return (
        <>
        <BrowserRouter>
            <CartProvider>
            <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/checkout" element={<Checkout />}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
    );
};

export default App;