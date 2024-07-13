import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Footer from './Pages/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Navbar />
                <Routes>
                    <Route index element={<Home name="home" />} />
                    <Route path="about" element={<About />} />
                    <Route path="service" element={<Service />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
