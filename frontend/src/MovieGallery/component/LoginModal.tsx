import Login from "../Login";
import React from "react";
import {useNavigate} from "react-router-dom";

type LoginModalProps={
    login:(username:string, password:string)=>Promise<string>
    openLoginModal:boolean
}

export default function LoginModal(props: LoginModalProps){

    const openLoginModal = "show d-block"

    const showModal = ()=> {
        if(props.openLoginModal){
            return openLoginModal
        }
    }

    const navigate = useNavigate()
    function onClickCloseBtn(){
        navigate("/")
    }

    return(
        <div className={"modal fade " + showModal()} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                        <button onClick={onClickCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Login login={props.login} />
                    </div>
                </div>
            </div>
        </div>
    )
}