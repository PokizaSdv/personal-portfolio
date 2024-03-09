import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBarLinksProps } from "./types";
import "./NavBarLinks.css";

const NavBarLinks: React.FC<NavBarLinksProps> = ({ links, contactMe }) => {
    return (
        <>
            <ul className="nav-bar__links">
                {links.links.map((link, idx) => {
                    return (
                        <li key={idx} className="nav-bar__link-item">
                            <NavLink to={link.linkTo} className="nav-bar__link">{link.linkText}</NavLink>
                        </li>
                    );
                })}
            </ul>
            <div></div>
        </>
    );
};

export {NavBarLinks}