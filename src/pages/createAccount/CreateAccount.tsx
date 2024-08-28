import React, { useState } from "react"
import './CreateAccount.css';
import { createAcc } from "../../utilities/fetch";
import { useNavigate } from "react-router-dom";

export type User = {
    username: string;
    password: string;
};

export default function CreateAccount() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const userData: User = {username, password};
        const acc = await createAcc(userData);
        console.log(acc.success);

        if(acc.success === true){
          navigate("/");
        }
    }

  return (
    <main>
        <form onSubmit={handleSubmit}>
            <label>
                Användarnamn:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                ></input>
            </label>
            <label>
                Lösenord:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                ></input>
            </label>
            <button type="submit">Skapa konto</button>
        </form>
    </main>
  )
}