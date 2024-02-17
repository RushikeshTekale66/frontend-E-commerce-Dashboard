import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {URL} from './url';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch(`${URL}/register`, {
            method: 'post',
            body: JSON.stringify({name, email,mobile, password}),
            headers: {
                'content-Type': 'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result);
        if(result){
            navigate('/')
        }
    }

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
 
    return (
        <div className="register">
            <h2>Employee Register </h2>

            <label for="userCaptcha">Name: </label>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <label for="userCaptcha">Email: </label>
            <input className="inputbox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <label for="userCaptcha">Mobile: </label>
            <input className="inputbox" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" />

            <label for="userCaptcha">Password: </label>
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button className="appbutton" type="button" onClick={collectData}>Signup</button>
        </div>
    )

}

export default Signup;