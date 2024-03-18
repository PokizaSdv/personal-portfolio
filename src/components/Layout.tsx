import styled from "styled-components";

export const NavLayout = styled.section`
    display: flex;
    padding: 0 var(--space-100) 0 var(--space-100);
    box-shadow: var(--box-shadow-1);
`;

export const RawLayout = styled.section`
    display: flex;
    padding: var(--space-32) 0 0 var(--space-100);
`;

export const ColumnLayout = styled.section`
    display: flex;
    padding: 0 var(--space-100) var(--space-80) var(--space-100);
    flex-direction: column;
`
