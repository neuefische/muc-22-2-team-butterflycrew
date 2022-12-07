import {MovieToExchange} from "../model/MovieToExchange";
import MovieExchangeCard from "./MovieExchangeCard";


export type MovieExchangeGalleryProps={
    movies: MovieToExchange[]
    deleteMovie:(id?:string)=>void

}

export default function MovieExchangeGallery(props:MovieExchangeGalleryProps){

    const toDoItemComponents = props.movies.map(movieData =>{
        return <MovieExchangeCard deleteMovie={props.deleteMovie} movieToExchange={movieData} key={movieData.id}/>
    })

    return(
        <div className={"row row-cols-4"}>
            {toDoItemComponents}

        </div>
    )
}