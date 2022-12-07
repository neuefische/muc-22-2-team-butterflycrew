import {MovieToExchange} from "../model/MovieToExchange";
import {useState} from "react";

export type MovieExchangeCardProps = {
    movieToExchange: MovieToExchange
    deleteMovie:(id?:string)=>void
    // editMovie:(id?:string, title:string, description:string, status:string, condition:string, price?:number)=>void
    editMovie(newMovie:MovieToExchange):void

}

export default function MovieExchangeCard(props: MovieExchangeCardProps) {

    const [title, setTitle] = useState(props.movieToExchange.title)
    const [description, setDescription] = useState(props.movieToExchange.description)
    const [status, setStatus] = useState(props.movieToExchange.status)
    const [condition, setCondition] = useState(props.movieToExchange.condition)
    const [price, setPrice] = useState(props.movieToExchange.price)


    function onClickDelete(){
        props.deleteMovie(props.movieToExchange.id)
    }

    function handleChange() {
        const newMovie: MovieToExchange = {
            id: props.movieToExchange.id,
            title:title,
            description: description,
            status: status,
            condition: condition,
            price:price
        }
        props.editMovie(newMovie)
    }


    return (
        <div className={"container-fluid justify-content-center"}>
            <div className={"card m-4 p-2 border"}>
                <p>Title: <br/> {props.movieToExchange.title}</p>
                <p>Description: <br/> {props.movieToExchange.description}</p>
                <p>Status: <br/> {props.movieToExchange.status}</p>
                <p>Condition: <br/> {props.movieToExchange.condition}</p>
                <p>Price: <br/> {props.movieToExchange.price} EUR</p>
                <button className={"btn btn-outline-secondary mt-3"} onClick={handleChange}>Edit</button>
                <button className={"btn btn-outline-danger mt-1"} onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}