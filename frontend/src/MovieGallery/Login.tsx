import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";

export default function Login(){
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function onUsernameChange(event: ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }
    function onPasswordChange(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function onLoginSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        axios.post("/api/users/login", undefined, {
            auth: {
                username,
                password
            }
        })
            .then(console.log)
    }

    const loginStyle = {
        width: "200px",
        height: "500px"
    }

    return(
        <div className={"container-sm mt-2"}>
            <div style={loginStyle}>
                <form onSubmit={onLoginSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" value={username} onChange={onUsernameChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" value={password} onChange={onPasswordChange} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button className={"btn btn-info"} type={"submit"}>Login</button>
                </form>
            </div>
        </div>
    )
}