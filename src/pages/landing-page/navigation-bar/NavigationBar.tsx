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
