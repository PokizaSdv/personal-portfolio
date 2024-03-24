import { NavLayout, NavBar, NavBarLinks } from "../../../components";
import { NavBarLinkItem } from "../../../components/NavBarLinks/types";
import { Button } from "../../../design-system/Button";

const links: NavBarLinkItem[] = [
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
];

const NavigationBar = () => {
    const handleContactMe = () => {};

    return (
        <NavLayout>
            <NavBar>
                <NavBarLinks links={links}></NavBarLinks>
                <Button color="secondary" className="paragraph-md" onClick={handleContactMe}>
                    Contact Me
                </Button>
            </NavBar>
        </NavLayout>
    );
};

export { NavigationBar };
