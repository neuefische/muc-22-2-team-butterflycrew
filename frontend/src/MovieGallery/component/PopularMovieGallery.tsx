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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
            {popularMovieComponent}
        </div>
    )
}