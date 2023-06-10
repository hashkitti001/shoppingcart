import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/components/HomePage';
import Store from '../src/components/Store';
import ErrorPage from './components/NotFound';
import Cart from './components/Cart'
function App () {
        return (
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
           
        )
    
}
export default App;
