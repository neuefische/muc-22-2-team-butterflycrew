import {PopularMovie} from "../model/PopularMovie";
import PopularMovieComponent from "./PopularMovieComponent";

type PopularMovieGalleryProps = {
    popularMovies: PopularMovie[]
}

export default function PopularMovieGallery(props: PopularMovieGalleryProps){
    const popularMovieComponent = props.popularMovies.slice(0, 5).map((movie) => {
            return(
                <PopularMovieComponent popularMovie={movie} key={movie.id} />
            )
        })

    return(
        <div className="card-group">
            {popularMovieComponent}
        </div>
    )
}