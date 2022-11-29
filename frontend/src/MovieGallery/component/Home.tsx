import UpcomingMovieGallery from "./UpcomingMovieGallery";
import {useEffect, useState} from "react";
import {UpcomingMovie} from "../model/UpcomingMovie";
import axios from "axios";

export default function Home(){

    const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovie[]>([])

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    function getUpcomingMovies(){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=541894e58c6ae639dc89b9c8e73a5cf8&language=de")
            .then((response) => {
                setUpcomingMovies(response.data.results)
            })
            .catch(e => console.error(e))
    }

    return(
        <div>
            <h1>Upcoming Movies</h1>
            <UpcomingMovieGallery upcomingMovies={upcomingMovies} />
        </div>
    )
}