import React, { useState } from "react";
import styled from "styled-components";
import { NavBarLinkItem } from "./types";
import { Button } from "../../design-system/Button";
import burgerIcon from "../../assets/icons/burger.svg";
import closeIcon from "../../assets/icons/close-3.svg";
import "./NavBarLinks.css";
import { MobileNavigation } from "../MobileNavigation";

type NavBarLinksProps = {
    links: NavBarLinkItem[];
};

const StyledImg = styled.img`
    width: 4rem;
    height: 4rem;
    z-index: 999;
    margin-top: 3rem;
    margin-right: 5rem;

    @media (max-width: 25em) {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 3rem;
    }
`;
const StyledImg2 = styled.img`
    width: 4rem;
    height: 4rem;
    z-index: 999;
    margin-top: 1rem;
    margin-right: 14rem;
    position: fixed;

    @media (max-width: 25em) {
        width: 2.5rem;
        height: 2.5rem;
        margin-top: 2rem;
        margin-right: 8rem;
    }
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
                    <StyledImg2 src={closeIcon} alt="close icon" />
                ) : (
                    <StyledImg src={burgerIcon} alt="burger icon" />
                )}
            </div>
            {showMenu ? <MobileNavigation /> : null}
        </div>
    );
};

export { NavBarLinks };
