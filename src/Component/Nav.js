import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from '../Assets/profile.png'

const Nav = () => {
    const auth = localStorage.getItem('user');
    let userInfo = JSON.parse(auth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }


    return (
        <div>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png" alt="Logo img"/>
            {
                auth ? <ul className="nav-ul">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    {/* <li><Link to="/update/:id">Update Product</Link></li> */}
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link onClick={logout} to="/signup">Log Out</Link></li>
                    <li style={{float:"right", fontSize:"30px", padding:"10px"}}>{userInfo.name}<img src={Profile} alt="Profile" height={40} width={40}></img></li>
                </ul> :

                    <ul className="nav-ul nav-right">
                        <li><Link to="/signup">Sign Up/ Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;