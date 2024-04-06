import styled from "styled-components";

export const Container = styled.section`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    padding: var(--space-12) var(--space-100) var(--space-100) var(--space-100);


    @media (max-width: 75em) {
    padding: var(--space-12) var(--space-80) var(--space-80) var(--space-80);    
    }

    @media (max-width: 62.5em) {
    padding: var(--space-12) var(--space-64) var(--space-64) var(--space-64);    
    }

    @media (max-width: 56rem) {
        flex-wrap: wrap;
    }
`;
