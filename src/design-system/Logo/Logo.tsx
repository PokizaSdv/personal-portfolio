import styled from "styled-components";
import logo from "../../assets/icons/L2775.svg";
import logoWhite from "../../assets/icons/logo-white.svg"

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
`

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