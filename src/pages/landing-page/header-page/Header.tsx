import styled from "styled-components";
import { Container, HeaderLeft, HeaderRight } from "../../../components";

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;

    @media (max-width: 56em) {
        flex-wrap: wrap;
        padding-bottom: 0;
        padding-left: var(--space-4);
        padding-right: var(--space-4);
    }
`;

const HeaderSection = () => {
    return (
        <StyledContainer>
            <HeaderLeft />
            <HeaderRight />
        </StyledContainer>
    );
};

export { HeaderSection };
