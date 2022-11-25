import {Movie} from "../model/Movie";
import {useNavigate} from "react-router-dom";
export type MovieCardProps = {
    movies: Movie
}

export default function MovieCard(props: MovieCardProps) {

    const navigate = useNavigate()

    function onClickDetails(){
        navigate("/movies/" + props.movies.id)
    }


    return (
        <div className={"card"}>
            {/*<img src={props.movies.poster_path} alt={"MoviePicture"}/>*/}
            <h2>{props.movies.title}</h2>
            <p>{props.movies.release_date}</p>
            <div className={"button"}>
                <button onClick={onClickDetails}>Details</button>
            </div>
        </div>
    )
}