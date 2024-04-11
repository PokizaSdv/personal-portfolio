import styled from "styled-components";
import logo from "../../assets/icons/L2775.svg";
import logoWhite from "../../assets/icons/logo-white.svg";

const StyledImg0 = styled.img`
    height: 6rem;
    width: 6rem;
    position: absolute;
    top: 6%;
    left: 9%;
`;

const StyledImg = styled.img`
    height: 6rem;
    width: 6rem;
`;

const StyledImg2 = styled.img`
    height: 6rem;
    width: 6rem;

    @media (max-width: 22em) {
        display: none;
    }
`;

const Logo0 = () => {
    return (
        <div className="logo-wrapper">
            <StyledImg0 src={logo} alt="" />
        </div>
    );
};

export { Logo0 };

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <StyledImg src={logo} alt="" />
        </div>
    );
};

export { Logo };

const LogoWhite = () => {
    return (
        <div className="logo-wrapper">
            <StyledImg2 src={logoWhite} alt="" />
        </div>
    );
};

export { LogoWhite };
