import React, {ChangeEvent, FormEvent, useState} from "react";

import {useNavigate} from "react-router-dom";


type LoginProps={
    login:(username:string, password:string)=>Promise<string>
}


export default function Login(props: LoginProps){
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    function onUsernameChange(event: ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }
    function onPasswordChange(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function onLoginSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.login(username,password)
            .then(user=>{
             navigate("/movies")
            })

    }

    return(
            <form onSubmit={onLoginSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" value={username} onChange={onUsernameChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" value={password} onChange={onPasswordChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Stay logged in
                                </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
    )
}