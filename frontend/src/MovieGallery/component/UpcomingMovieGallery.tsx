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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4">
            {upcomingMovieComponent}
        </div>
    )
}