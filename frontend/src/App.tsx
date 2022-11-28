import React from 'react';

import NavBar from "./MovieGallery/component/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header/>

            <Routes>
                <Route path={"/"} element={<p>"Movies"</p>}></Route>
                <Route path={"/home"} element={"Home"}></Route>
                <Route path={"/Movies"} element={<NavBar/>}></Route>
                <Route path={"/movie/:id"} element={<Details/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
