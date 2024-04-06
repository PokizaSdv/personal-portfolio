import styled from "styled-components";
import { NavBar, NavBarLinks } from "../../../components";
import { NavBarLinkItem } from "../../../components/NavBarLinks/types";

export const links: NavBarLinkItem[] = [
    {
        linkTo: "google.com",
        linkText: "Home"
    },
    {
        linkTo: "#portfolio",
        linkText: "Portfolio"
    },
    {
        linkTo: "#aboutme",
        linkText: "About me"
    },
    {
        linkTo: "#services",
        linkText: "Services"
    }
];

const NavBarWrapper = styled.section`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    padding: var(--space-12) var(--space-100) var(--space-100) var(--space-100);
    overflow: visible !important;

    @media (max-width: 75em) {
    padding: var(--space-12) var(--space-80) var(--space-60) var(--space-80);    
    }

    @media (max-width: 62.5em) {
    padding: var(--space-12) var(--space-64) var(--space-42) var(--space-64);    
    }
`;

const NavigationBar = () => {
    return (
        <NavBarWrapper>
            <NavBar>
                <NavBarLinks links={links}></NavBarLinks>
            </NavBar>
        </NavBarWrapper>
    );
};

export { NavigationBar };
