import "./FooterContent.css"
import logo from "../../assets/images/Logo.png"
import { NavBarLinkItem } from "../NavBarLinks/types"
import React from "react"
import { Icon } from "../../design-system/Icon"

type FooterProps = {
    links: NavBarLinkItem[]
}

const FooterContent: React.FC<FooterProps> = ({links}) => {
    return (
        <footer className="footer">
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="Logo" />
                <p className="logo-text">POKIZADEV</p>
            </div>
            <ul className="nav-bar__links">
                {links.map((link, idx) => {
                    return (
                        <li key={idx} className="nav-bar__link-item">
                            <a href={link.linkTo} className="nav-bar__link paragraph-lg">
                                {link.linkText}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className="icons-wrapper">
                <Icon iconName="github-sq"/>
                <Icon iconName="linkedin"/>
                <Icon iconName="twitterx"/>
                <Icon iconName="facebook"/>
                

            </div>
        </footer>
    )
}

export {FooterContent}