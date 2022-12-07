import {MovieToExchange} from "../model/MovieToExchange";

export type MovieExchangeCardProps = {
    movieToExchange: MovieToExchange

}

export default function MovieExchangeCard(props: MovieExchangeCardProps) {


    return (
        <div className={"container-fluid justify-content-center"}>
            <div className={"card m-4 p-2 border"}>
                <p>Title: {props.movieToExchange.title}</p>
                <p>Description: {props.movieToExchange.description}</p>
                <p>Status: {props.movieToExchange.status}</p>
                <p>Condition: {props.movieToExchange.condition}</p>
                <p>Price: {props.movieToExchange.price}</p>
            </div>
        </div>
    )
}