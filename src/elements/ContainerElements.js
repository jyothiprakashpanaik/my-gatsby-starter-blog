import styled from "styled-components"

export const ConstainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12,minmax(auto,4.2rem)) 1fr;
    grid-temmplate-row: 7.8rem 20rem 5rem auto;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6,1fr) 2rem;
        grid-gap: 0 1rem;
    }
    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repet(6,1fr) 1rem;
    }
`