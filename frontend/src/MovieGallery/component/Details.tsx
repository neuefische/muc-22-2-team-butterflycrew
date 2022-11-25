import {useState} from "react";
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";

export default function Details(){

    const params = useParams()
    const [movie, setMovie] = useState<Movie>()

}