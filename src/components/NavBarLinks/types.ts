type NavBarLink = {
    linkText: string;
    linkTo: string;
}
export type NavBarLinks = {
    links: NavBarLink[]
}

export type NavBarLinksProps = {
    links: NavBarLinks;
    contactMe: () => void;
}