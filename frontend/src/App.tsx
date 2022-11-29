import React from 'react';

import NavBar from "./MovieGallery/component/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";
import Home from "./MovieGallery/component/Home";


function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
