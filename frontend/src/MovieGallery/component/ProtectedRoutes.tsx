import {Navigate, Outlet} from "react-router-dom";

type ProtectedRoutesProps = {
    username: string | undefined
}

export default function  ProtectedRoutes(props: ProtectedRoutesProps){

    const isAuthenticated: boolean = props.username !== "Mousse au chocolate!"
        && props.username !== undefined && props.username !== null

    return(

        isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>
    )
}