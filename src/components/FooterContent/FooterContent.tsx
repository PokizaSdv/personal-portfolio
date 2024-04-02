import "./FooterContent.css";
import { FooterLinkItem } from "./types";
import React from "react";
import { Icon } from "../../design-system/Icon";
import { LogoWhite } from "../../design-system/Logo/Logo";

type FooterProps = {
    links: FooterLinkItem[];
};

const FooterContent: React.FC<FooterProps> = ({ links }) => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <LogoWhite />
                <ul className="footer__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx} className="footer__link-item">
                                <a
                                    href={link.linkTo}
                                    className="footer__link paragraph-lg"
                                >
                                    {link.linkText}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="footer__icons-wrapper">
                    <a
                        className="footer_icon"
                        href="https://github.com/pokizadev"
                        target="_blank"
                    >
                        <Icon iconName="github-sq" />
                    </a>
                    <a
                        className="footer_icon"
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                    >
                        <Icon iconName="linkedin" />
                    </a>

                    <a
                        className="footer_icon"
                        href="https://twitter.com/Pokiza_dev"
                        target="_blank"
                    >
                        <Icon iconName="twitterx" />
                    </a>

                    <a
                        className="footer_icon"
                        href="https://www.facebook.com/"
                        target="_blank"
                    >
                        <Icon iconName="facebook" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="paragraph-lg footer-bottom-text">
                    Copyright © PokizaDev. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export { FooterContent };
