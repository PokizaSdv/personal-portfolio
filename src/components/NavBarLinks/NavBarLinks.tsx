import React from "react";
import { NavBarLinkItem } from "./types";
import "./NavBarLinks.css";

type NavBarLinksProps = {
    links: NavBarLinkItem[]
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({ links }) => {
    return (
        <>
            <ul className="nav-bar__links">
                {links.map((link, idx) => {
                    return (
                        <li key={idx} className="nav-bar__link-item">
                            <a href={link.linkTo} className="nav-bar__link paragraph-lg">
                                {link.linkText}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export { NavBarLinks };
