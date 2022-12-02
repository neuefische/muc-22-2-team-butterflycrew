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
        axios.get("http://localhost:3000/api/movies/upcoming-movies")
            .then((response) => {
                setUpcomingMovies(response.data.results)
            })
            .catch(e => console.error(e))
    }

    return(
        <div className={"container-xl"}>
            <h1>Upcoming Movies</h1>
            <UpcomingMovieGallery upcomingMovies={upcomingMovies} />
        </div>
    )
}