import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
    const [text, setText] = useState("/home");

    const handleChange = event => {
        setText("/home/"+event.target.value);
    };

    return (
        <div className="navv">
            <div className="logo">
                <Link to="/home">
                    <img id="image"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png" />
                </Link>
            </div>
            <div className="categories">
                <a> Categories </a>
            </div>
            <div className="form" action="">
                <Link to={text}>
                    <button></button>
                </Link>
                <input type="input" id="search" onChange={handleChange} placeholder="Search for anything" />
            </div>
            <div className="business">
                <span> Udemy Business </span>
            </div>
            <div className="teach">
                <span> Teach on Udemy </span>
            </div>
            <div className="buy">
                <button id="buy"></button>
            </div>
            <div className="loginn">
                <button id="loginbtn"> Log in </button>
            </div>
            <div className="signups">
                <button id="signupbtn"> Sign up </button>
            </div>
            <div className="globe">
                <div className="globe2">
                    <button id="globe"></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;