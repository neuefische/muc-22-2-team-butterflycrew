import UpcomingMovieGallery from "./UpcomingMovieGallery";
import {useEffect, useState} from "react";
import {UpcomingMovie} from "../model/UpcomingMovie";
import axios from "axios";
import {TopRatedMovie} from "../model/TopRatedMovie";
import TopRatedMovieGallery from "./TopRatedMovieGallery";
import {PopularMovie} from "../model/PopularMovie";
import PopularMovieGallery from "./PopularMovieGallery";


export default function Home(){

    const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovie[]>([])
    const [topratedMovies, setTopratedMovies] = useState<TopRatedMovie[]>([])
    const [populareMovies, setPopulareMovies] = useState<PopularMovie[]>([])


    useEffect(() => {
        getUpcomingMovies()
        getTopratedMovies()
        getPopulareMovies()
    }, [])

    function getUpcomingMovies(){
        axios.get("/api/movies/upcoming-movies")
            .then((response) => {

                setUpcomingMovies(response.data)
            })
            .catch(e => console.error(e))
    }
    function getTopratedMovies(){
        axios.get("/api/movies/toprated-movies")
            .then((response) => {
                setTopratedMovies(response.data)
            })
            .catch(e=> console.error(e))
    }
    function getPopulareMovies(){
        axios.get("/api/movies/populare-movies")
            .then((response) => {
                setPopulareMovies(response.data)
            })
            .catch(e=> console.error(e))
    }

    return(
        <div className="container-xl">
            <h1>Upcoming Movies</h1>
            <UpcomingMovieGallery upcomingMovies={upcomingMovies} />

            <h1>Toprated Movies</h1>
            <TopRatedMovieGallery topRatedMovies={topratedMovies} />

            <h1>Populare Movies</h1>
            <PopularMovieGallery popularMovies={populareMovies} />
        </div>
    )
}