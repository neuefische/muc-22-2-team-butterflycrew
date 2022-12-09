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
import AboutUs from "./MovieGallery/component/AboutUs";


function App() {

const {username, login, logout}= useUser()


    return (
        <div className="App">

            <BrowserRouter>

                <Header username={username} logout={logout} login={login}/>

                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/login"} element={<Login  login={login} />}></Route>
                    <Route path={"/about"} element={<AboutUs/>}></Route>

                    <Route element={
                        <ProtectedRoutes username={username}  login={login}/>
                    } >
                        <Route path={"/Movies"} element={<MovieApp />}></Route>
                        <Route path={"/exchange"} element={<MovieExchangeApp/>}></Route>
                        <Route path={"/details/:id"} element={<Details />}></Route>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
