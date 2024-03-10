type NavBarLinksItem = {
    linkText: string;
    linkTo: string;
}
export type NavBarLinksGroup = {
    links: NavBarLinksItem[]
}

export type NavBarLinksProps = {
    links: NavBarLinksGroup;
    contactMe: () => void;
}