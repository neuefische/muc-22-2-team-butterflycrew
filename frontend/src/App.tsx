import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";
import Home from "./MovieGallery/component/Home";
import MovieExchangeApp from "./MovieGallery/component/MovieExchangeApp";

import Footer from "./MovieGallery/component/Footer";
function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <Header/>

                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/Movies"} element={""}></Route>
                    <Route path={"/exchange"} element={<MovieExchangeApp/>}></Route>
                    <Route path={"/details/:id"} element={<Details/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}
export default App;
