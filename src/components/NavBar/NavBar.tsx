import React from "react";
import "./NavBar.css";
import { Logo } from "../../design-system/Logo/Logo";

type NavBarProps = {
    children: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({children}) => {
    return (
        <div id="top-page" className="navigation-bar">
            <Logo/>
            {children}
        </div>
    )
}

export {NavBar}