import React, { useEffect } from 'react';
import { NavBar } from './components/NavBar'; 
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from './firebase/firebase';
import CartProvider from './context/CartContext';

function App() {
    // useEffect(() => {
    //     const collectionRef = collection(firestore, "items");
    //     getDocs(collectionRef)
    //         .then(snapshot => {
    //             console.log({snapshot});
    //             snapshot.forEach((doc) => console.log(doc.data()));
    //         })
    //         .catch((error) => console.log(error))
    //         .finally(() => {});
    // }, [])
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
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
    );
};

export default App;