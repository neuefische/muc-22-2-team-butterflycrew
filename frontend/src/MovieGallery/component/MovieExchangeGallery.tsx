import {MovieToExchange} from "../model/MovieToExchange";
import MovieExchangeCard from "./MovieExchangeCard";


export type MovieExchangeGalleryProps={
    movies: MovieToExchange[]
}

export default function MovieExchangeGallery(props:MovieExchangeGalleryProps){

    const toDoItemComponents = props.movies.map(movieData =>{
        return <MovieExchangeCard movieToExchange={movieData} key={movieData.id}/>
    })

    return(
        <div>
            {toDoItemComponents}

        </div>
    )
}