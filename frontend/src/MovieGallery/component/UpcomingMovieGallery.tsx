import {UpcomingMovie} from "../model/UpcomingMovie";
import UpcomingMovieComponent from "./UpcomingMovieComponent";
import "./upcomingMovieGallery.css";

type UpcomingMovieGalleryProps = {
    upcomingMovies: UpcomingMovie[]
}

export default function UpcomingMovieGallery(props: UpcomingMovieGalleryProps){
    const upcomingMovieComponent = props.upcomingMovies.slice(0, 5).map((movie) => {
        return (
            <UpcomingMovieComponent upcomingMovie={movie} key={movie.id} />
        )
    })

    return(
        <div className="row row-cols-md-1 row-cols-lg-2 row-cols-xl-4 g">
            {upcomingMovieComponent}
        </div>
    )
}