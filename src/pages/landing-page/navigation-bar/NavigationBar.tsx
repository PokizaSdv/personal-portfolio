import { NavLayout, NavBar, NavBarLinks } from "../../../components";
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
        <NavLayout>
            <NavBar>
                <NavBarLinks
                    links={links}
                    contactMe={handleContactMe}
                ></NavBarLinks>
                <Button color="secondary" className="paragraph-md">
                    Contact Me
                </Button>
            </NavBar>
        </NavLayout>
    );
};

export { NavigationBar };
