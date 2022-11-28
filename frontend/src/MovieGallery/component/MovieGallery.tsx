import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";

type MovieGalleryProps = {
    movieList : Movie[]
}



export default function MovieGallery(props: MovieGalleryProps){

    const movieComponents = props.movieList.map((movie)=>{
        return <MovieCard movie={movie} key={movie.id}/>
    })

    return(

        <div className={"gallery"}>
            {movieComponents}
        </div>

    )
}