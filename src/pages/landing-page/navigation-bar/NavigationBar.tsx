import { FlexLayout, NavBar, NavBarLinks } from "../../../components";
import { NavBarLinksGroup } from "../../../components/NavBarLinks/types";

const links: NavBarLinksGroup = {
    links: [
        {
            linkTo: "/",
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
            </NavBar>
        </FlexLayout>
    );
};

export { NavigationBar };
