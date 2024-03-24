import { FooterContent } from "../../../components/FooterContent"
import { NavBarLinkItem } from "../../../components/NavBarLinks/types";

const links: NavBarLinkItem[] = [
    {
        linkTo: "/google.com",
        linkText: "Home"
    },
    {
        linkTo: "/",
        linkText: "Services"
    },
    {
        linkTo: "/",
        linkText: "About me"
    },
    {
        linkTo: "/",
        linkText: "Projects"
    }
];


const Footer = () => {
    return (
        <FooterContent links={links} />
            
    )
}

export {Footer}