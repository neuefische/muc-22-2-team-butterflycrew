import {MovieToExchange} from "../model/MovieToExchange";
import {ChangeEvent, FormEvent, useState} from "react";


type MovieExchangeFormProps = {
    addMovie:(newMovie: MovieToExchange)=>void
}

export default function MovieExchangeForm(props: MovieExchangeFormProps){

    const emptyFormPlaceholder: MovieToExchange ={

        title:"",
        description:"",
        status:"",
        condition:"",
        price:0
    }

    const[exchangeMovie, setExchangeMovie]=useState<MovieToExchange>(emptyFormPlaceholder)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        props.addMovie(exchangeMovie)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){

        const changedInput = event.target.name


        setExchangeMovie(
            (prevState)=>({
                ...prevState,
                    [changedInput]:
                    event.target.type === "text"
                        ?event.target.value: ""
            })
        )
    }

    return(

        <div>

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title:</span>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Title"
                           aria-describedby="basic-addon1" value={exchangeMovie.title} name={"title"}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Description"
                           aria-describedby="basic-addon1" value={exchangeMovie.description} name={"description"}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Search or Offer:</span>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Status"
                           aria-describedby="basic-addon1" value={exchangeMovie.status} name={"status"}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Condition:</span>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Condition"
                           aria-describedby="basic-addon1" value={exchangeMovie.condition} name={"condition"}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price:</span>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Price"
                           aria-describedby="basic-addon1" value={exchangeMovie.price} name={"price"}/>
                </div>

                <button type={"submit"}>Add</button>

            </form>
        </div>
    )

}