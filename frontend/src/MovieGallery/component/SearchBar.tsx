import {ChangeEvent} from "react";

type SearchBarProps = {
    handleSearchText: (searchText: string) => void
}

export default function SearchBar(props: SearchBarProps){

    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>){
        props.handleSearchText(event.target.value)
    }

    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for a cool Movie here..." aria-label="Search"
                   aria-describedby="basic-addon1" onChange={handleOnChangeSearchText} />
            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    )
}