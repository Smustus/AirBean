import { useState } from "react";
import './LoginForm.css';
import React from "react";
import { loginAcc } from "../../utilities/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../reducers/loggedInReducer";

type User = {
    username: string;
    password: string;
}

export default function LoginForm() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const userData: User = { username, password };
        const token = await loginAcc(userData);
        console.log(token);
        if(!token) return

        dispatch(setLoginState(true))
        navigate("/navigation");
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label>
                    Användarnamn:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    ></input>
                </label>
                <label>
                    Lösenord:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                </label>
                <button type="submit">Logga in</button>
            </form>
        </article>
    )
}