import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";
import Home from "./MovieGallery/component/Home";
import MovieApp from "./MovieGallery/component/MovieApp";

function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <Header/>

                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/Movies"} element={<MovieApp />}></Route>
                    <Route path={"/details/:id"} element={<Details />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
