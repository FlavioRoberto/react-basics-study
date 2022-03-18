import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";
import Clock from './clock';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Clock />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;