import React from "react";
import "./NavBar.css";
import logo from "../../assets/logop.png";

type NavBarProps = {
    children: React.ReactNode;
};
const NavBar: React.FC<NavBarProps> = ({children}) => {
    return (
        <div className="navigation-bar">
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="Logo" />
                <p className="logo-text">POKIZADEV</p>
            </div>
            {children}
        </div>
    )
}

export {NavBar}