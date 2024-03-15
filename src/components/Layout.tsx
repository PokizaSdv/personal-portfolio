import styled from "styled-components";

export const NavLayout = styled.section`
    display: flex;
    padding: 0 var(--space-80) 0 var(--space-80);
    box-shadow: var(--box-shadow-1);
`;

export const RawLayout = styled.section`
    display: flex;
    padding: var(--space-32) 0 0 var(--space-80);
`;

export const ColumnLayout = styled.section`
    display: flex;
    padding: 0 var(--space-80) var(--space-80) var(--space-80);
    flex-direction: column;
`
