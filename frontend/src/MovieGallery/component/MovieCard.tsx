import {Movie} from "../model/Movie";
import {useNavigate} from "react-router-dom";
import {getImage} from "../api/image-api";
export type MovieCardProps = {
    movie: Movie
}

export default function MovieCard(props: MovieCardProps) {

    const navigate = useNavigate()

    function onClickDetails(){
        navigate("/details/" + props.movie.id)
    }

    return (
        <div className={"card"}>
            <img src={getImage(props.movie.poster_path)} alt={"MoviePicture"}/>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.release_date}</p>
            <div className={"button"}>
                <button onClick={onClickDetails}>Details</button>
            </div>
        </div>
    )
}