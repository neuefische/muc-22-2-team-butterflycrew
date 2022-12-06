import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./MovieGallery/component/Details";
import Header from "./MovieGallery/component/Header";
import Home from "./MovieGallery/component/Home";
import MovieExchangeApp from "./MovieGallery/component/MovieExchangeApp";

import Footer from "./MovieGallery/component/Footer";
import MovieApp from "./MovieGallery/component/MovieApp";
import Login from "./MovieGallery/Login";
import ProtectedRoutes from "./MovieGallery/component/ProtectedRoutes";
import useUser from "./MovieGallery/hooks/useUser";

function App() {

const {username, login}= useUser()

    return (
        <div className="App">

            <BrowserRouter>

                <Header login={login}/>

                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/Movies"} element={<MovieApp />}></Route>
                    <Route path={"/details/:id"} element={<Details />}></Route>
                    <Route path={"/login"} element={<Login />}></Route>
                    <Route path={"/exchange"} element={<MovieExchangeApp/>}></Route>
                    <Route path={"/details/:id"} element={<Details/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
