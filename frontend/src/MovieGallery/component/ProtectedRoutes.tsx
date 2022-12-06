import {Outlet} from "react-router-dom";
import LoginModal from "./LoginModal";

type ProtectedRoutesProps = {
    username: string | undefined
    login:(username:string, password:string)=>Promise<string>
}


export default function  ProtectedRoutes(props: ProtectedRoutesProps){



    const isAuthenticated: boolean = props.username !== "Mousse au chocolate!"
        && props.username !== undefined && props.username !== null

    return(

        isAuthenticated ? <Outlet/> : <LoginModal openLoginModal={true} login={props.login}/>
    )
}