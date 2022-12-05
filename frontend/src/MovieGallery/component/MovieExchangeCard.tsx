import {MovieToExchange} from "../model/MovieToExchange";

export type MovieExchangeCardProps = {
    movieToExchange: MovieToExchange

}

export default function MovieExchangeCard(props:MovieExchangeCardProps){



    return(
    <div className={"card border-0"}>
        <p>{props.movieToExchange.title}</p>
        <p>{props.movieToExchange.description}</p>
        <p>{props.movieToExchange.status}</p>
        <p>{props.movieToExchange.condition}</p>
        <p>{props.movieToExchange.price}</p>
    </div>
    )
}