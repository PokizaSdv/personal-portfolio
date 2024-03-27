import styled from "styled-components";
import logo from "../../assets/icons/L2775.svg";

const StyledImg = styled.img`
    height: 6rem;
    width: 6rem;
`;

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <StyledImg src={logo} alt="" />
        </div>
    );
};

export { Logo };
