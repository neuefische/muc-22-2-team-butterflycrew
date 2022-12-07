import {MovieToExchange} from "../model/MovieToExchange";

export type MovieExchangeCardProps = {
    movieToExchange: MovieToExchange
    deleteMovie:(id?:string)=>void

}

export default function MovieExchangeCard(props: MovieExchangeCardProps) {

    function onClickDelete(){
        props.deleteMovie(props.movieToExchange.id)
    }


    return (
        <div className={"container-fluid justify-content-center"}>
            <div className={"card m-4 p-2 border"}>
                <p>Title: {props.movieToExchange.title}</p>
                <p>Description: {props.movieToExchange.description}</p>
                <p>Status: {props.movieToExchange.status}</p>
                <p>Condition: {props.movieToExchange.condition}</p>
                <p>Price: {props.movieToExchange.price}</p>
                <button className={"btn btn-outline-secondary mt-3"} >Edit</button>
                <button className={"btn btn-outline-danger mt-1"} onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}