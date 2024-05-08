import styled from "styled-components";
import { Container, HeaderLeft, HeaderRight } from "../../../components";

const StyledContainer = styled(Container)`
    padding-right: 0 !important;
    @media (max-width: 56em) {
        flex-wrap: wrap;
    }
`

const HeaderSection = () => {
    return (
        <StyledContainer>
            <HeaderLeft />
            <HeaderRight />
        </StyledContainer>
    );
};

export { HeaderSection };
