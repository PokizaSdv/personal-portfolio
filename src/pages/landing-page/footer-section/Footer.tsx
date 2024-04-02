import { FooterContent } from "../../../components/FooterContent"
import { FooterLinkItem } from "../../../components/FooterContent/types";

const links: FooterLinkItem[] = [
    {
        linkTo: "",
        linkText: "Home"
    },

    {
        linkTo: "#portfolio",
        linkText: "Portfolio"
    },

    {
        linkTo: "#services",
        linkText: "Services"
    },
    {
        linkTo: "#aboutme",
        linkText: "About me"
    },
   
];


const Footer = () => {
    return (
        <FooterContent links={links} />
            
    )
}

export {Footer}