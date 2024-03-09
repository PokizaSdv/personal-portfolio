import React from "react";
import "./NavBar.css";
import logo from "../../assets/Logo.png";


const NavBar = () => {
    return (
        <nav className="navigation-bar">
            <div className="logo-wrapper">
                <img src={logo} alt="Logo" />
                <p>PokizaSdv</p>
            </div>
            
        </nav>
    )
}

export {NavBar}