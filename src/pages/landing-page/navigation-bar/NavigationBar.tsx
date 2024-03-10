import styled from "styled-components";
import { FlexLayout, NavBar, NavBarLinks } from "../../../components";
import { NavBarLinksGroup } from "../../../components/NavBarLinks/types";
import { Button } from "../../../design-system/Button";

const links: NavBarLinksGroup = {
    links: [
        {
            linkTo: "google.com",
            linkText: "Home"
        },
        {
            linkTo: "/",
            linkText: "Portfolio"
        },
        {
            linkTo: "/",
            linkText: "About me"
        },
        {
            linkTo: "/",
            linkText: "Testimonials"
        }
    ]
};


const NavigationBar = () => {
    const handleContactMe = () => {};

    return (
        <FlexLayout>
            <NavBar>
                <NavBarLinks
                    links={links}
                    contactMe={handleContactMe}
                ></NavBarLinks>
                <Button color="secondary" className="paragraph-md">
                    Contact Me
                </Button>
            </NavBar>
        </FlexLayout>
    );
};

export { NavigationBar };
