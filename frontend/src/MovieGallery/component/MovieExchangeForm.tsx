import {MovieToExchange} from "../model/MovieToExchange";
import {ChangeEvent, FormEvent, useState} from "react";
import "./MovieExchangeForm.css"

type MovieExchangeFormProps = {
    addMovie: (newMovie: MovieToExchange) => void
}

export default function MovieExchangeForm(props: MovieExchangeFormProps) {

    const emptyFormPlaceholder: MovieToExchange = {

        title: "",
        description: "",
        status: "",
        condition: "",
        price: undefined
    }

    const [exchangeMovie, setExchangeMovie] = useState<MovieToExchange>(emptyFormPlaceholder)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        props.addMovie(exchangeMovie)
        setExchangeMovie(emptyFormPlaceholder)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {

        const changedInput = event.target.name


        setExchangeMovie(
            (prevState) => ({
                ...prevState,
                [changedInput]:
                    event.target.type === "text"
                        ? event.target.value : ""
            })
        )
    }

    return (

        <div className={"container "}>
            <div className={"row mb-3"}>
                <form className={"border mt-4"} onSubmit={handleSubmit}>
                    <div className="input-group mt-4 mb-3">
                        <span className="input-group-text" id="basic-addon1">Title:</span>
                        <input onChange={handleChange} type="text" className="form-control" placeholder=""
                               aria-label="Title"
                               aria-describedby="basic-addon1" value={exchangeMovie.title} name={"title"}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description:</span>
                        <input onChange={handleChange} type="text" className="form-control" placeholder=""
                               aria-label="Description"
                               aria-describedby="basic-addon1" value={exchangeMovie.description} name={"description"}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Search or Offer:</span>
                        <input onChange={handleChange} type="text" className="form-control" placeholder=""
                               aria-label="Status"
                               aria-describedby="basic-addon1" value={exchangeMovie.status} name={"status"}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Condition:</span>
                        <input onChange={handleChange} type="text" className="form-control" placeholder="new or used"
                               aria-label="Condition"
                               aria-describedby="basic-addon1" value={exchangeMovie.condition} name={"condition"}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price:</span>
                        <input onChange={handleChange} type="text" className="form-control" placeholder="EUR"
                               aria-label="Price"
                               aria-describedby="basic-addon1" value={exchangeMovie.price} name={"price"}/>
                    </div>
                    <div className={"button-style"}>
                    <button className={"btn btn-lg btn-outline-success mb-2"} type={"submit"}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )

}