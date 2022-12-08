import {ChangeEvent, useState} from "react";

type SearchBarProps = {
    handleSearchText: (searchText: string) => void
}

export default function SearchBar(props: SearchBarProps){

    const [searchText, setSearchText] = useState<string>("")

    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
        props.handleSearchText(searchText)
    }

    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for a cool Movie here..." aria-label="Search"
                   aria-describedby="basic-addon1" onChange={handleOnChangeSearchText} value={searchText} />
            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    )
}