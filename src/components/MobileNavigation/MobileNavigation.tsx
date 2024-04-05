import aboutIcon from "../../assets/icons/about.svg"
import serviceIcon from "../../assets/icons/service.svg"
import homeIcon from "../../assets/icons/home.svg"
import contactIcon from "../../assets/icons/contact.svg"
import portfolioIcon from "../../assets/icons/portfolio.svg"

import "./MobileNavigation.css";
import styled from "styled-components"


export const links = [
    {   
        icon: homeIcon,
        linkTo: "google.com",
        linkText: "Home"
    },
    {
        icon: portfolioIcon,
        linkTo: "#portfolio",
        linkText: "Portfolio"
    },
    {   
        icon: aboutIcon,
        linkTo: "#aboutme",
        linkText: "About me"
    },
    {   
        icon: serviceIcon,
        linkTo: "#services",
        linkText: "Services"
    },
    {
        icon: contactIcon,
        linkto: "#contactme",
        linkText: "Contact"
    }
];

const StyledImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: var(--space-22);
`;

const MobileNavigation = () => {
    return (
        <div className="mobile-navigation">
            <ul className="mobile-nav__links">
                {links.map((link, idx) => {
                    return (
                        <li key={idx} className="mobile-nav__link-item">
                            <StyledImg src={link.icon} alt="icon"/>
                            <a
                                href={link.linkTo}
                                className="mobile-nav__link paragraph-lg"
                            >
                                {link.linkText}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { MobileNavigation };
