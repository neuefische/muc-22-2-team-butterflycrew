import {MovieToExchange} from "../model/MovieToExchange";
import {ChangeEvent, useState} from "react";
import "./MovieExchangeCard.css"

type MovieExchangeCardProps = {
    movieToExchange: MovieToExchange
    deleteMovie:(id?:string)=>void
    editMovie(newMovie:MovieToExchange):void

}

export default function MovieExchangeCard(props: MovieExchangeCardProps) {

    const [title, setTitle] = useState(props.movieToExchange.title)
    const [description, setDescription] = useState(props.movieToExchange.description)
    const [status, setStatus] = useState(props.movieToExchange.status)
    const [condition, setCondition] = useState(props.movieToExchange.condition)
    const [price, setPrice] = useState(props.movieToExchange.price)


    const [showButton, setShowButton]=useState<boolean>(false)

    function onClickEditButton(){
        setShowButton(true)
        console.log(showButton)
    }


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
        setShowButton(false)
    }





    return (
        <div className={"container-fluid justify-content-center"}>
            <div className={"card m-4 p-2 border"}>
                <h6>Title:</h6> <p className={showButton? "disappear-btn":"show-btn"}>{props.movieToExchange.title}</p>
                <input className={showButton?"show-btn":"disappear-btn"} type={"text"} onChange={(event:ChangeEvent<HTMLInputElement>) => {setTitle(event.target.value)}} value={title}/>
                <h6>Description:</h6> <p className={showButton? "disappear-btn":"show-btn"}>{props.movieToExchange.description}</p>
                <input className={showButton?"show-btn":"disappear-btn"} type={"text"} onChange={(event:ChangeEvent<HTMLInputElement>) => {setDescription(event.target.value)}} value={description}/>
                <h6>Status: </h6> <p className={showButton? "disappear-btn":"show-btn"}>{props.movieToExchange.status}</p>
                <input className={showButton?"show-btn":"disappear-btn"} type={"text"} onChange={(event:ChangeEvent<HTMLInputElement>) => {setStatus(event.target.value)}} value={status}/>
                <h6>Condition: </h6> <p className={showButton? "disappear-btn":"show-btn"}> {props.movieToExchange.condition}</p>
                <input className={showButton?"show-btn":"disappear-btn"} type={"text"} onChange={(event:ChangeEvent<HTMLInputElement>) => {setCondition(event.target.value)}} value={condition}/>
                <h6>Price: </h6> <p className={showButton? "disappear-btn":"show-btn"}> {props.movieToExchange.price} EUR</p>
                <input className={showButton?"show-btn":"disappear-btn"} type={"number"} onChange={(event:ChangeEvent<HTMLInputElement>) => {setPrice(Number(event.target.value))}} value={price}/>



                <button className={showButton?"btn btn-outline-secondary mt-3 disappear-btn":"btn btn-outline-secondary mt-3 show-btn"} onClick={onClickEditButton}>Edit</button>
                <button className={showButton? "btn btn-outline-success mt-1 show-btn":"btn btn-outline-success mt-1 disappear-btn"} onClick={handleChange}>Save</button>
                <button className={"btn btn-outline-danger mt-1"} onClick={onClickDelete}>Delete</button>

            </div>
        </div>
    )
}