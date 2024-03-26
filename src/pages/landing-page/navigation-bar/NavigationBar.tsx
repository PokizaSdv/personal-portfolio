import { NavLayout, NavBar, NavBarLinks } from "../../../components";
import { NavBarLinkItem } from "../../../components/NavBarLinks/types";
import { Button } from "../../../design-system/Button";

const links: NavBarLinkItem[] = [
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

const NavigationBar = () => {
    const handleContactMe = () => {
        const contactMeElement = document.getElementById("contactme");
        if (contactMeElement) {
            contactMeElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <NavLayout>
            <NavBar>
                <NavBarLinks links={links}></NavBarLinks>
                <Button
                    color="secondary"
                    className="paragraph-md"
                    onClick={handleContactMe}
                >
                    Contact Me
                </Button>
            </NavBar>
        </NavLayout>
    );
};

export { NavigationBar };
