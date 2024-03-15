import React from "react";
import "./NavBar.css";
import logo from "../../assets/logop.png";
import logotext from "../../assets/logot.png"

type NavBarProps = {
    children: React.ReactNode;
};
const NavBar: React.FC<NavBarProps> = ({children}) => {
    return (
        <div className="navigation-bar">
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="Logo" />
                <img className="logo-text" src={logotext} alt="Logo" />
            </div>
            {children}
        </div>
    )
}

export {NavBar}