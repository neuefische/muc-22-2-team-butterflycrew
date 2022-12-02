import React from 'react';

import NavBar from "./MovieGallery/component/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";
import Home from "./MovieGallery/component/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Movies"} element={<NavBar/>}></Route>
                <Route path={"/details/:id"} element={<Details/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
