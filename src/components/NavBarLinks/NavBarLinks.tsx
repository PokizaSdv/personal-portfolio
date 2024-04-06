import React, { useState } from "react";
import styled from "styled-components";
import { NavBarLinkItem } from "./types";
import { Button } from "../../design-system/Button";
import burgerIcon from "../../assets/icons/burger.svg";
import closeIcon from "../../assets/icons/close-1.svg";
import "./NavBarLinks.css";
import { MobileNavigation } from "../MobileNavigation";

type NavBarLinksProps = {
    links: NavBarLinkItem[];
};

const StyledImg = styled.img`
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: 999;
    display: flex;
    text-align: center;
`;

const NavBarLinks: React.FC<NavBarLinksProps> = ({ links }) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleContactMe = () => {
        const contactMeElement = document.getElementById("contactme");
        if (contactMeElement) {
            contactMeElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleOnClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar_wrapper">
            <div className="navbar">
                <ul className="nav-bar__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx} className="nav-bar__link-item">
                                <a
                                    href={link.linkTo}
                                    className="nav-bar__link paragraph-lg"
                                >
                                    {link.linkText}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <Button
                    color="secondary"
                    className="paragraph-md"
                    onClick={handleContactMe}
                >
                    Contact Me
                </Button>
            </div>
            <div className="burgerIcon" onClick={handleOnClick}>
                {showMenu ? (
                    <StyledImg src={closeIcon} alt="close icon" />
                ) : (
                    <StyledImg src={burgerIcon} alt="burger icon" />
                )}
            </div>
            {showMenu ? <MobileNavigation /> : null}
        </div>
    );
};

export { NavBarLinks };
